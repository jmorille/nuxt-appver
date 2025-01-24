import type { Dayjs } from 'dayjs';


export interface AppVerEnv extends Record<string, any>{
    metric: string;
    application: string;
    version: string;
    buildTime?: Dayjs|string;
    env: string;
    zone: string;
    maven: AppVersionMaven;
    git: AppVersionGit;
    scrapper: AppVersionScrapper;
    info: Record<string, any>;
}

export interface AppVersionMaven {
    artifactId?: string;
    groupId?: string;
    pomName?: string;
}

export interface AppVersionGit {
    branch?: string;
    sha1?: string;
}
export interface AppVersionScrapper {
    job: string;
    instance: string;
    scrapDate: Dayjs;
}