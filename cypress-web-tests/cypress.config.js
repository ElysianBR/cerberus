const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  env: {
    tags: ['focus']
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 15000,
  numTestsKeptInMemory: 0,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": true,
    "json": true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    env: {
      allureReuseAfterSpec: true
    },
    baseUrl: 'https://elysian.com.br',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    retries: {
      runMode: 2,
      openMode: 0
    }
  },
})