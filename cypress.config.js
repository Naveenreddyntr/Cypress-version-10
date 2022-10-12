const cypress = require("cypress");
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'uk8y1y',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
            
    },
    "specPattern":"cypress/e2e/1-getting-started/*.feature"

  },
  "env": {
    "homepage":"http://the-internet.herokuapp.com"
  },
    defaultCommandTimeout: 6000,
    
      "reporter": "mochawesome",
      "reporterOptions": {
         "reportDir": "cypress/reports",
         "reportFilename" : "report",
         "overwrite":false,
         "html": true,
         "json": true
      },
      retries: {

        runMode: 2,
  
        openMode: 2,
  
        },
        
        
          
        
});

