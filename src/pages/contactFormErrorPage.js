/**
 * @file:        contactFormErrorPage.js
 * @description: Defines the ContactFormErrorPage class responsible for encapsulating the behaviors 
 * and interactions necessary for testing the error validation of the contact form on a website. 
 * This includes submitting a form with all fields blank and retrieving any error messages that are displayed.
 * @date:       2024-03-10
 * @author:     Dhruba Deka
 * 
 * Revision History:
 * -
 */
 

const { Page } = require('@playwright/test');
const { BASE_URL } =require('../helper/env/env')

class contactFormErrorPage {
   /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = BASE_URL;
    this.submitButton = '#submitContact';
  }

  async submitFormWithAllFieldsBlank() { await this.page.click(this.submitButton);
    //await this.page.pause();
    await this.page.waitForTimeout(2000); }

  async getErrorMessages() {
    await this.page.waitForSelector('.alert.alert-danger p'); 
    return this.page.$$eval('.alert.alert-danger p', elements =>
      elements.map(element => element.textContent.trim())
    );
}
  
}

module.exports = { contactFormErrorPage };
