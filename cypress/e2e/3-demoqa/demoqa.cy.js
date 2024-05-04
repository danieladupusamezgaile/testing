const { CheckboxPage } = require("../../pageObjects/checkbox.page");
const { TextboxPage } = require("../../pageObjects/textbox.page");
const { RadioButtonsPage } = require("../../pageObjects/radiobuttons.page");

describe("Demoqa", () => {
    context("Text Box", () => {
        beforeEach(() => {
            TextboxPage.visit();
        });
        it("Enter text field values - positive", () => {
            TextboxPage.fullnameTextField.type("Daniela");
            TextboxPage.userEmailField.type("daniela@gmail.com");
            TextboxPage.currentAddressField.type("Viestura laukums 5-4, LV-4567");
            TextboxPage.permanentAddressField.type("Viestura laukums 5-4, LV-4567");
            TextboxPage.submitButton.click();
            TextboxPage.nameOutput.should("have.text", "Name:Daniela");
            TextboxPage.emailOutput.should("have.text", "Email:daniela@gmail.com");
            TextboxPage.currentAddressOutput.should("contain.text", "Current Address :Viestura laukums 5-4, LV-4567");
            TextboxPage.permanentAddressField.should("contain.text", "Permananet Address :Viestura laukums 5-4, LV-4567");
        });

        it("Enter text field values - negative", () => {
            // set email incorrect format
            // click submit  button
            // validate that the red border appears
            TextboxPage.userEmailField.should("not.have.class", "field-error");
            TextboxPage.userEmailField.type("daniela");
            TextboxPage.submitButton.click();
            TextboxPage.userEmailField.should("have.class", "field-error");
        });
    });

    context("Check boxes", () => {
        beforeEach(() => {
            CheckboxPage.visit();
        });

        it('Check the checkboxes', () => {
            // click the + expoand button
            // check the following checkboxes - notes, angular, private and excel file .doc
            CheckboxPage.expandAllButton.click();
            CheckboxPage.checkboxes.contains("Notes").click();
            CheckboxPage.checkboxes.contains("Angular").click();
            CheckboxPage.checkboxes.contains("Private").click();
            CheckboxPage.checkboxes.contains("Excel File.doc").click();
            // validate that you selected - notes, angular, private and excel file .doc
            CheckboxPage.selectedCheckboxes.should(
                "contain.text",
                "notesangularprivateexcelFile"
              );
        });
    });

    context("Radio buttons", () => {
        beforeEach(() => {
          RadioButtonsPage.visit();
        });
     
        it("Click radio buttons", () => {
          // Click Yes radio button
          // Validate that "You have selected Yes"
          // Click Impressive button
          // Validate that "You have selected Impressive"
          // Validate that No button is not clickable
        });
      });
});