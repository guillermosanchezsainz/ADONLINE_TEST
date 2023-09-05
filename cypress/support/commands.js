// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {loginPageAdonline} from '../e2e/utils/LoginPageAdonline.js';
import {loginPageShipo} from '../e2e/utils/LoginPageShipo.js';
import {utilsPage} from '../e2e/utils/UtilsPage.js';

Cypress.Commands.add('loginAdonline', (email, password) => {
  utilsPage.elements.baseUrl = "https://mdemoshipo.protecmedia.com/";
  utilsPage.elements.webService = "/adonline/";
  cy.visit(utilsPage.url);
  loginPageAdonline.submitLogin(email, password)
});

Cypress.Commands.add('loginShipo', (email, password) => {
  /* utilsPage.elements.baseUrl = "http://mdesashipo.protecmedia.com";
  utilsPage.elements.webService = "/shipov25desa/"; */
  utilsPage.elements.baseUrl = "http://localhost";
  //utilsPage.elements.webService = ":4200";
  utilsPage.elements.webService = "/Shipo25";

  cy.visit(utilsPage.url);
  loginPageShipo.submitLogin(email, password)
});

Cypress.Commands.add('abrirMenuSeccion', () => { 
  cy.xpath("//mat-toolbar/mat-toolbar-row/shared-module-navigator/button").click();
});

Cypress.Commands.add('seleccionarSuscripciones', () => { 
  cy.xpath("//mat-dialog-container/shared-module-card/mat-card/mat-card-content[1]/mat-card-content[1]").click();  
});

Cypress.Commands.add('abrirMenuSuscripciones', () => { 
  cy.xpath("/html/body/app-root/susc-page/div/mat-toolbar/mat-toolbar-row/button").click();
});

Cypress.Commands.add('abrirGestionComercial', () => { 
  cy.xpath("/html/body/div[2]/div[2]/div/div/div/button[1]").click();
});

Cypress.Commands.add('abrirNuevaSuscripcion', () => { 
  cy.allure().step("Abrir 'Nueva suscripcion'");
  cy.xpath("//html/body/div[2]/div[3]/div/div/div/button[9]").click();
});

Cypress.Commands.add('abrirCRM', () => { 
  cy.get(".menuSec").contains("CRM").click();
  //cy.xpath("/html/body/div[2]/div[8]/div/div/div/button[1]").click();
});

Cypress.Commands.add('abrirGestionFinanciera', () => { 
  cy.getContains("Abrir Gestión Financiera", "Gestión financiera").click();
});

Cypress.Commands.add('abrirGestionFacturacion', () => {
  cy.getContains("Abrir Gestión Facturación", "Gestión de facturación").click();
});

Cypress.Commands.add('abrirConsultaFacturacion', () => { 
  cy.getContains("Abrir Consulta Facturación", "Consulta de facturación").click();
});

Cypress.Commands.add ('getPath', ( comment, path, command, value ) =>{
  if ( comment != null && comment != "")
  {
    cy.log(comment);
    cy.allure().step(comment);
  }
  
  return cy.xpath(path);

  /* if (command == "click")
    cy.xpath(path).click();
  else if (command == "type")
    cy.xpath(path).type(value);
  else if (command == "clear")
    cy.xpath(path).clear(); */
});

Cypress.Commands.add ('getContains', ( comment, path, command, value ) =>{
  cy.log(comment);
  return cy.contains(path);
});

Cypress.Commands.add ('comboSelect', ( comment, path, command, value ) =>{
  cy.getPath(comment, path, command, value).click();
  if ( command == null )
  {
    cy.getContains(comment, value).then( elemen => {
      elemen.click();
    });  
  }
  else{
    cy.getPath("", "//html/body/div[2]/div[7]/div/div/div/mat-option[2]/span/div").click();
  }
  
})

/* Cypress.Commands.overwrite('should', (originalFn, actual, assertion, expected, options) => {
  if (options && options.message) {
    cy.on('fail', (error, runnable) => {
      error.name = 'CustomError'
      error.message = options.message
      throw error // throw error to have test still fail
    })
  }
  return originalFn(actual, assertion, expected, options)
}) */