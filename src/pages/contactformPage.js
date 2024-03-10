/**
 * @file:        contactformPage.js
 * @description: Defines the contactformPage class that encapsulates the methods for interacting with 
 * the contact form fields on the website. This includes opening the contact page, filling out the form with 
 * name, email, phone, subject, and message details, and submitting the form. It also specifies the locators 
 * for various form elements, facilitating automated testing of the contact form's functionality.
 
 * @date:       2024-03-10
 * @author:     Dhruba Deka
 * 
 * Revision History:
 * -
 */


const { Page } = require('@playwright/test');
const { BASE_URL } =require('../helper/env/env')

class contactformPage {
   /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = BASE_URL;
    this.nameInput = 'input[placeholder="Name"]';
    this.emailInput = 'input[placeholder="Email"]';
    this.phoneInput = 'input[placeholder="Phone"]';
    this.subjectInput = 'input[placeholder="Subject"]';
    this.messageInput = '#description';
    this.submitButton = 'button#submitContact';
    this.confirmationMessageLocator = 'div.row.contact h2';
    
  }

  async open() {
    await this.page.goto(this.url);
  }

  async fillName(name) {
    await this.page.fill(this.nameInput, name);
  }

  async fillEmail(email) {
    await this.page.fill(this.emailInput, email);
  }

  async fillPhone(phone) {
    await this.page.fill(this.phoneInput, phone);
  }

  async fillSubject(subject) {
    await this.page.fill(this.subjectInput, subject);
  }

  async fillMessage(message) {
    await this.page.fill(this.messageInput, message);
  }

  async submit() {
    await this.page.click(this.submitButton);
    await this.page.waitForTimeout(3000);
  }

  async getConfirmationMessage() {
    await this.page.waitForSelector(this.confirmationMessageLocator);
    const fullMessage = await this.page.textContent(this.confirmationMessageLocator);
    return fullMessage;
  }
  
}
 
module.exports = { contactformPage };
