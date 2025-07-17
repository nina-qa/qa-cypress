const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // padrão do Cypress
    baseUrl: "https://www.saucedemo.com", // opcional, se quiser usar cy.visit("/") ao invés da URL completa
    setupNodeEvents(on, config) {
      // plugins podem ser adicionados aqui no futuro, se necessário
      return config;
    },
  },
});
