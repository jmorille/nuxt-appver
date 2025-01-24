import type  {AppVerEnv} from "../../shared/appver/AppVerModel";
import usePrometheusRepository from "../repository/PrometheusRepository";

interface QueryInterface {
    query: string;
}

defineRouteMeta({
    openAPI: {
        description: 'Get Prometheus Query',
        parameters: [{
            in: "query", name: "query", required: true,
            description: "Prometheus Complexe Query:  \n Syntaxe like: app_version_info{'env'='integ','zone'='lan', artifactid=~'bff.*'} \n",
            example: "app_version_info{'zone'='lan'}"
        }],
        tags: [ 'Prometheus'], 
    },
});

export default defineEventHandler((event):Promise< AppVerEnv[]> => {
    const {query} = getQuery<QueryInterface>(event);
    const runtimeConfig = useRuntimeConfig();
    const baseUrls: string[] = runtimeConfig.prometheus.baseUrls;
    const usePrometheus = usePrometheusRepository(event);
    const requests = baseUrls.map((baseUrl: string) => {
        return usePrometheus.getPrometheusMetrics( baseUrl, query);
    });
    return Promise.all(requests).then((apps: AppVerEnv[][]) => {
        return apps.flat();
    });
});




