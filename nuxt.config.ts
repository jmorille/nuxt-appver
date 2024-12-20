// https://nuxt.com/docs/api/configuration/nuxt-config
import packageJson from './package.json';

import { md3 } from 'vuetify/blueprints';  


export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', 'vuetify-nuxt-module' ],
  nitro: {
    experimental: {
      openAPI: true,
    }, 
    openAPI: {
      meta: {
        title: 'My Awesome Project',
        description: 'This might become the next big thing.',
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
  }
})