/**
 * @file:       contactform.steps.js
 * @description: Contains step definitions for the Cucumber scenarios related to the contact form. 
 * Each step definition uses Playwright functions to interact with the contact form's web elements, 
 * mapping the plain language Gherkin steps to executable code. Steps cover navigation to the contact page, 
 * input actions for all form fields, and the submission process. This file is key for driving the browser 
 * automation based on the behavior scenarios described in the feature files.
 * @date:       2024-03-10
 * @author:     Dhruba Deka
 * 
 * Revision History:
 * -
 */

const { Given, When, Then,setDefaultTimeout } = require('@cucumber/cucumber');
const { contactformPage } = require('../../pages/contactformPage');
const { expect } = require('@playwright/test');
const { getPage } = require('../../hooks/hooks');
setDefaultTimeout(60 * 1000 * 2)


let ContactformPage;

Given('the user navigates to the Contact page', async function () {
  const page = getPage();
  ContactformPage = new contactformPage(page);
  await ContactformPage.open();
});

When('the user fills in the Name field with {string}', async function (name) {
  await ContactformPage.fillName(name);
});

When('the user fills in the Email field with {string}', async function (email) {
  await ContactformPage.fillEmail(email);
});

When('the user fills in the Phone field with {string}', async function (phone) {
  await ContactformPage.fillPhone(phone);
});

When('the user fills in the Subject field with {string}', async function (subject) {
  await ContactformPage.fillSubject(subject);
});

When('the user fills in the Message field with {string}', async function (message) {
  await ContactformPage.fillMessage(message);
});

When('the user clicks the Submit button', async function () {
  await ContactformPage.submit();
});


Then('the user should see a confirmation message {string}', async function (expectedFullMessage){
const actualFullMessage = await ContactformPage.getConfirmationMessage();
expect(actualFullMessage).toBe(expectedFullMessage); 
});