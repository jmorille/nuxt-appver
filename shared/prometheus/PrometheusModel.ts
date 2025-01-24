
export interface PrometheusQueryResult  {
    status: string;
    data: PrometheusQueryResultData;
}
export interface PrometheusQueryResultData  {
    resultType: string;
    result: PrometheusQueryResultDataResult[];
}

export interface PrometheusQueryResultDataResult  {
    metric: PrometheusMetrics;
    value:  (string | number)[];
}

export interface PrometheusMetrics extends Record<string, string> {
    __name__: string;
}