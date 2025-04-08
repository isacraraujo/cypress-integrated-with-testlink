const { defineConfig } = require("cypress");
const axios = require('axios');

module.exports = defineConfig({
  e2e: {
    // Exporta as configurações do e2e.js
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      on('task', {
        // função que configura o POST do relatório no Testlink
        reportToTestLink({ status, externalId, notes }) {
          const apiKey     = 'API_KEY_HERE'
          const idProject  = 1 // ID do projeto
          const idPlanTest = 100 // ID do plano de teste
          const baseline   = '1.0' // baseline de execução
          const url        = 'https://testlink.com' // url do testlink
          const xml        = `<?xml version="1.0"?>
          <methodCall><methodName>tl.reportTCResult</methodName>
            <params>
              <param>
                <value>
                  <struct>
                    <member><name>devKey</name><value><string>${apiKey}</string></value></member>
                    <member><name>testprojectid</name><value><int>${idProject}</int></value></member>
                    <member><name>testplanid</name><value><int>${idPlanTest}</int></value></member>
                    <member><name>testcaseexternalid</name><value><string>${externalId}</string></value></member>
                    <member><name>status</name><value><string>${status}</string></value></member>
                    <member><name>buildname</name><value><string>${baseline}</string></value></member>
                    <member><name>notes</name><value><string>${notes}</string></value></member>
                  </struct>
                </value>
              </param>
            </params>
          </methodCall>`;
    
          return axios.post(`${url}/lib/api/xmlrpc/v1/xmlrpc.php`, xml, {
            headers: { 'Content-Type': 'text/xml' },
          })
          .then((res) => {
            console.log('Teste reportado com sucesso.', res);
            return null;
          })
          .catch((err) => {
            console.error('Falha ao reportar:', err.message);
            return null;
          });
        }
      });
    },
  },
});