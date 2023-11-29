const { defineConfig } = require("cypress");
module.exports = defineConfig({

  defaultCommandTimeout: 6000,
env: {
    url:  
    "https://www.rahulshettyacademy.com",
userid: "rahul",
password: "3242"
  },
  retries: {
    runMode: 1,
      //openMode: 0,
    },

  chromeWebSecurity: false,
  "experimentalRunEvents": true,
  "defaultCommandTimeout": 10000,
  projectId: "sb6b6f",
  //npx cypress run --record --key 3f134dbb-c961-4bc7-be73-496189d9748e
   
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here      
    },
  
    specPattern: 'cypress/integration/examples/*.js'
  },
});


