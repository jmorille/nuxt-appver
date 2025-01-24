import type {PrometheusQueryResultDataResult} from "../../shared/prometheus/PrometheusModel";
import type {AppVerEnv} from "../../shared/appver/AppVerModel";
import dayjs from "dayjs";

export function formatPromVersion(result: PrometheusQueryResultDataResult): AppVerEnv {
    const {metric: metrics, value: promValues} = result;
    const {
        __name__: metric, // Metric name
        application, version, date: buildTimeStr, env, zone,
        commit: sha1, branch, // Git
        job, instance, // Git
        major, minor, patch, // Exclude metrics
        artifactid: artifactId, groupid: groupId, pomName, // Maven
        ...all
    } = metrics;
    const scrapTimespamp = promValues[0];
    const value = promValues[1];
    const scrapDate = dayjs(scrapTimespamp);
    const buildTime = buildTimeStr? dayjs(buildTimeStr): buildTimeStr;
    const appverEnv: AppVerEnv = {
        metric,
        maven: {groupId, artifactId, pomName},
        git: {sha1, branch},
        scrapper: {job, instance, scrapDate},
        application, env, version, zone,
        buildTime,
        info: all,
        value
    };
    return appverEnv;
}
