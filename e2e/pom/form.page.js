import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';
import logger from './../logger/logger';

const yamlPath = join(__dirname, './../selectors', 'form.yaml');

class FormPage {
  constructor(page) {
    this.page = page;
    const yamlContent = readFileSync(yamlPath, 'utf8');
    this.selectors = load(yamlContent);
  }

  async navigate() {
    logger.info('Navigating to the form URL');
    await this.page.goto(this.selectors.form_url);
    logger.info(`Navigated to ${this.selectors.form_url}`);
  }

  async fillName(name) {
    logger.info(`Filling in Name with: ${name}`);
    await this.page.locator(this.selectors.name_input).fill(name);
    logger.info('Name field filled');
  }

  async fillEmail(email) {
    logger.info(`Filling in Email with: ${email}`);
    await this.page.locator(this.selectors.email_input).fill(email);
    logger.info('Email field filled');
  }

  async fillIpname(ipName) {
    logger.info(`Filling in IP Name ${ipName}`);
    await this.page.locator(this.selectors.ip_name_input).fill(ipName);
    logger.info('Ip name field filled');
  }
  async fillRegistrationNumber(registrationNumber) {
    logger.info(`Filling in Registration Number with: ${registrationNumber}`);
    await this.page.locator(this.selectors.registration_num_input).fill(registrationNumber);
    logger.info('Registration Number field filled');
  }

  async fillOwnerName(ownerName) {
    logger.info(`Filling in Owner Name with: ${ownerName}`);
    await this.page.locator(this.selectors.owner_name_input).fill(ownerName);
    logger.info('Owner Name field filled');
  }

  async checkRightsOwner() {
    logger.info('Checking the Rights Owner checkbox');
    await this.page.locator(this.selectors.rights_owner_checkbox).check();
    logger.info('Rights Owner checkbox checked');
  }

  async fillInformantRelationship(relationship) {
    logger.info(`Filling in Informant Relationship with: ${relationship}`);
    await this.page.locator(this.selectors.informant_relationship_input).fill(relationship);
    logger.info('Informant Relationship field filled');
  }

  async fillInformantCompanyName(companyName) {
    logger.info(`Filling in Informant Company Name with: ${companyName}`);
    await this.page.locator(this.selectors.informant_company_name_input).fill(companyName);
    logger.info('Informant Company Name field filled');
  }

  async fillInformantCompanyWebsite(website) {
    logger.info(`Filling in Informant Company Website with: ${website}`);
    await this.page.locator(this.selectors.informant_company_website_input).fill(website);
    logger.info('Informant Company Website field filled');
  }

  async fillInformantCompanyAddress(address) {
    logger.info(`Filling in Informant Company Address with: ${address}`);
    await this.page.locator(this.selectors.informant_company_address_input).fill(address);
    logger.info('Informant Company Address field filled');
  }

  async fillInformantEmail(email) {
    logger.info(`Filling in Informant Email with: ${email}`);
    await this.page.locator(this.selectors.informant_email_input).fill(email);
    logger.info('Informant Email field filled');
  }

  async fillInformantPhoneNumber(phoneNumber) {
    logger.info(`Filling in Informant Phone Number with: ${phoneNumber}`);
    await this.page.locator(this.selectors.informant_phone_num_input).fill(phoneNumber);
    logger.info('Informant Phone Number field filled');
  }

  async fillProductLink(productLink) {
    logger.info(`Filling in Product Link with: ${productLink}`);
    await this.page.locator(this.selectors.product_link_input).fill(productLink);
    logger.info('Product Link field filled');
  }

  async fillProblemDetails(details) {
    logger.info(`Filling in Problem Details with: ${details}`);
    await this.page.locator(this.selectors.problem_details_input).fill(details);
    logger.info('Problem Details field filled');
  }

  async uploadFile(selector, filename) {
    try {
      const basePath = join(__dirname, './../upload-data');
      const location = join(basePath, filename);
      await this.page.locator(selector).setInputFiles(location);
      logger.info(`File uploaded: ${filename}`);
    } catch (error) {
      logger.error(`Error uploading file: ${error}`);
    }
  }

  async checkDeclaration() {
    logger.info('Checking the Declaration checkbox');
    await this.page.locator(this.selectors.declaration_checkbox).check();
    logger.info('Checked the box');

  }

  async submitForm() {
    logger.info('Submitting the form');
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.locator(this.selectors.submit_form_button).click()
    ]);
    logger.info('Submitted the form');
  }
}

export default FormPage;
