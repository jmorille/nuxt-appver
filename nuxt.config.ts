// https://nuxt.com/docs/api/configuration/nuxt-config
import packageJson from './package.json';

import { md3 } from 'vuetify/blueprints';  


export default defineNuxtConfig({
  runtimeConfig: {
    prometheus: {
      baseUrls: ['https://rec-monprom.agrica.loc', 'https://monprom.agrica.loc'],
      username: "prom_login",
      password: "prom_password",
    }
  },

  buildDir: 'target/.nuxt',
  devtools: { enabled: true, timeline: { enabled: true} },
  modules: ['@nuxtjs/i18n', 'vuetify-nuxt-module'],

  typescript: {
    typeCheck: true
  },
  $development: {
    vite: {
      server: {
        allowedHosts: true,
      },
    },
  },
  nitro: {
    preset: 'node-server',
    experimental: {
      openAPI: true,
    }, 
    openAPI: {
      meta: {
        title: 'App Ver',
        description: 'Application versions.',
        version: packageJson.version
      }
    }
  },

  i18n: {
    locales: [{
      code: 'en-US',
      iso: 'en-US',
      file: 'en-US.json', // <== or js/ts files
      name: 'English', 
    }, {
      code: 'fr-FR',
      iso: 'fr-FR',
      file: 'fr-FR.json', // <== or js/ts files
      name: 'French', 
    }],
    lazy: true,
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    // put your json files in this folder or configure your own path
    langDir: 'locales/',
    defaultLocale: 'fr-FR',
    types: 'composition',
    pages: undefined, 
    skipSettingLocaleOnNavigate: true,
    // debug: true,
    // Vue configuration file, you can move it to the root folder
    vueI18n: './i18n.config.ts'
  },

  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      blueprint: md3,
      theme: {
        defaultTheme: 'dark'
      },
      icons: {
        defaultSet: 'mdi',
        sets: [ 'mdi', 'fa' ]
      }
    }
  },

  compatibilityDate: '2025-01-24'
})