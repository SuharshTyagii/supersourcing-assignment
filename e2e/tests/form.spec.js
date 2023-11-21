import { test, expect } from '@playwright/test';
import { Chance } from 'chance';
import FormPage from './../pom/form.page';

test.describe('Form Test', () => {
  test('fill form and submit', async ({ page }) => {
    const formPage = new FormPage(page);
    const chance = new Chance();
    await formPage.navigate();

    // Fill out the form fields
    await formPage.fillName(chance.name());
    await formPage.fillEmail(chance.email());
    await formPage.fillIpname(`Product: ${chance.name()}`)
    await formPage.fillRegistrationNumber(chance.guid());
    await formPage.fillOwnerName(chance.name());
    await formPage.checkRightsOwner();
    await formPage.fillInformantRelationship(chance.pickone(['Friend', 'Manager', 'CEO']));
    await formPage.fillInformantCompanyName(chance.company());
    await formPage.fillInformantCompanyWebsite(chance.url());
    await formPage.fillInformantCompanyAddress(chance.address());
    await formPage.fillInformantEmail(chance.email());
    await formPage.fillInformantPhoneNumber('9999999999');
    await formPage.fillProductLink(chance.url());
    await formPage.fillProblemDetails(chance.paragraph());

    // Upload files
    await formPage.uploadFile(formPage.selectors.form_excel_file, 'file_example_XLS_100.xls');
    await formPage.uploadFile(formPage.selectors.proof_of_ip_file, 'file-sample_150kB.pdf');
    await formPage.uploadFile(formPage.selectors.power_of_attorney_file, 'file-sample_150kB.pdf');
    await formPage.uploadFile(formPage.selectors.direct_selling_license_file, 'file-sample_150kB.pdf');

    // Check the declaration checkbox
    await formPage.checkDeclaration();

    // Submit the form
    await formPage.submitForm();

    // Assertions
    expect(page.url()).toContain('/submitted/');
  });
});
