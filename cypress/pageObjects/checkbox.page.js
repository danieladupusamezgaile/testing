import { BasePage } from "./base.page";

export class CheckboxPage extends BasePage {
    static get url() {
        return "/checkbox";
    }

    static get expandAllButton() {
        return cy.get("[title='Expand all']");
    }

    static get checkboxes() {
        return cy.get("[class='rct-title']");
    }

    static get selectedCheckboxes(){
        return cy.get("[id='result']");
    }
}