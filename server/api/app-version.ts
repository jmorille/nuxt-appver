import type  {AppVerEnv} from "../../shared/appver/AppVerModel";
import usePrometheusRepository from "../repository/PrometheusRepository";

interface QueryInterface {
    promParams: string;
}

defineRouteMeta({
    openAPI: {
        description: 'Get Application versions',
        parameters: [{
            in: "query", name: "promParams", required: false,
            description: "Prometheus Complexe Query:  \n Syntaxe like: env='integ', zone='lan', artifactid=~'bff.*' \n",
            example: "zone='lan'"
        }],
        tags: [ 'AppVer'], 
    },
});

export default defineEventHandler((event):Promise<Record<string, any>> => {
    const {promParams} = getQuery<QueryInterface>(event);
    const queries = [ "app_version_info", "app_version" ];
    const runtimeConfig = useRuntimeConfig();
    const baseUrls: string[] = runtimeConfig.prometheus.baseUrls;
    const usePrometheus = usePrometheusRepository(event);
    const requests = baseUrls.map((baseUrl: string) => {
        return queries.map( (query) => {
            const promQuery = `${query}{${promParams?promParams:""}}`;
            return usePrometheus.getPrometheusMetrics( baseUrl, promQuery);
        })
    }).flat();
    return Promise.all(requests).then((apps: AppVerEnv[][]) => {
        return apps.flat();
    }).then(mergeById);
});

function mergeById(versions: AppVerEnv[]) {
    return versions.reduce( (acc:Record<string, any>, version) => {
        const id = getId(version);
        let app = acc[id];
        const {metric, maven, application, value, env, ...rest} = version;
        // Create application
        if (!app) {
            app = { maven, application, env:{} };
            acc[id] = app;
        }
        // Add Application env
        let appEnv = app.env[env];
        if (appEnv) {
            appEnv = [...appEnv,rest];
        } else {
            appEnv= [rest];
        }
        app.env[env] = appEnv;


        return acc;

    }, {});
}

function getId(appver:AppVerEnv) {
    return appver.application ? appver.application:  `${appver.maven?.groupId}:${appver.maven?.artifactId}`;
}

