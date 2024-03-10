/**
* @file contactFormErrorChecks.steps.js
 * @description Defines step definitions for validating error handling on the contact form. It includes steps for 
 * submitting the form with all fields left blank and verifying the error messages that are displayed as a result.
 * The file maps the expected error messages to the actual ones found on the page, ensuring comprehensive 
 * coverage of form validation scenarios.
 
 * @date:       2024-03-10
 * @author:     Dhruba Deka
 * 
 * Revision History:
 * -
 */


const { Given, When, Then,setDefaultTimeout } = require('@cucumber/cucumber');
const { contactFormErrorPage } = require('../../pages/contactFormErrorPage');
const { getPage } = require('../../hooks/hooks');
const { Console } = require('console');
setDefaultTimeout(60 * 1000 * 2)


let ContactFormErrorPage;


When('the user submits the contact form with all fields blank', async function () {
  const page = getPage();
  ContactFormErrorPage = new contactFormErrorPage(page);
       await ContactFormErrorPage.submitFormWithAllFieldsBlank();
      
});

Then('the user should see the following error messages:', async function (dataTable) {

  const expectedErrorMessages = dataTable.hashes().map(row => row['Error Message']);
  const actualErrorMessages = await ContactFormErrorPage.getErrorMessages();

  const expectedMessagesMap = new Map();
  expectedErrorMessages.forEach(message => expectedMessagesMap.set(message, false));

  actualErrorMessages.forEach(actualMessage => {
    expectedMessagesMap.forEach((found, expectedMessage) => {
      if (actualMessage.includes(expectedMessage)) {
        expectedMessagesMap.set(expectedMessage, true);
      }
    });
  });

  let notFoundMessages = Array.from(expectedMessagesMap).filter(([message, found]) => !found).map(([message]) => message);

  if (notFoundMessages.length > 0) {
    throw new Error(`The following expected error messages were not found: ${notFoundMessages.join(', ')}`);
  } else {
    console.log('All expected error messages were found.');
  }
  });


