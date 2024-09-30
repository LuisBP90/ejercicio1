const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Reporte test saucedemo',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
    },
  },
});
