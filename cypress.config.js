const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    projectId: '97fmv6',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
  },
});
