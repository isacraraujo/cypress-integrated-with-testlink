// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Função que depois de cada teste, publica o sucesso ou falha no Testlink
afterEach(function () {
    const currentTest = this.currentTest;
    const title       = currentTest.title;
    const match       = title.match(/(projectprefix-\d+)/i); // Exemplo de título: 'edoc-4142 - deve fazer algo'
  
    if (match) {
      const externalId = match[1];
      const status     = currentTest.state === 'passed' ? 'p' : 'f';
      const notes      =
        status === 'p'
          ? 'Teste executado com sucesso via Cypress.'
          : `Teste falhou: ${currentTest.err?.message || 'sem detalhes'}`;
  
      cy.task('reportToTestLink', { status, externalId, notes });
    }
  });
  