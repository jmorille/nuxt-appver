import {Buffer} from "buffer";
import type {PrometheusQueryResult, PrometheusQueryResultDataResult} from "../../shared/prometheus/PrometheusModel";
import type {AppVerEnv} from "../../shared/appver/AppVerModel";
import {formatPromVersion} from "./PrometheusConverter";


 export default function usePrometheusRepository(event:any) {

    function getPrometheusMetrics( baseUrl: string, query: string): Promise<AppVerEnv[]> {
        return fetchPrometheusQuery( baseUrl, query).then(formatPrometheusQuery);
    }

    function fetchPrometheusQuery( baseUrl: string, query: string): Promise<PrometheusQueryResult> {
        const headers = getPrometheusHeaders();
        const opts: RequestInit = {headers}
        const url = `${baseUrl}/api/v1/query?query=${query}`;
        return event.$fetch(url, opts);
    }

    function getPrometheusHeaders(): Record<string, string>{
        const runtimeConfig = useRuntimeConfig();
        const username = runtimeConfig.prometheus.username;
        const password = runtimeConfig.prometheus.password;
        const basicAuth = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;
        return {
            'Content-Type': 'application/json',
            'Authorization': basicAuth
        };
    }

    function formatPrometheusQuery(res: PrometheusQueryResult): AppVerEnv[] {
        const results: PrometheusQueryResultDataResult[] = res.data.result;
        return results.map((result) => formatPromVersion(result));
    }


    return {
        getPrometheusMetrics,
    }
}


