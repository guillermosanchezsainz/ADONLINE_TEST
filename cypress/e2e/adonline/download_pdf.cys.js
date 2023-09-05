require('cypress-xpath');
import "cypress-real-events/support";
import {loginPageAdonline} from '../utils/LoginPageAdonline.js';
import {utilsPage} from './../utils/UtilsPage.js';
context('Test Adonline', () => {
  beforeEach(() => {
    cy.viewport(1400, 850);
    cy.loginAdonline('Jude Dennis', 'dennis');
  })

  describe('Descarga PDF', () => {
    it ( "descarga", ()=>{    
      let numberRef = "223/2023";
      cy.xpath("//html/body/app-root/content-area/div/div[1]/div/div/button[1]").click();
      // Buscar ordenes
      cy.xpath("//html/body/app-root/content-area/div/div[1]/div/div/div/div/button[2]").click();
      let sp = numberRef.split("/");
      
      cy.log (sp[0]);
      cy.log (sp[1]);
      
      // Teclear año
      cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/mat-accordion/mat-expansion-panel/div/div/div/div/div[1]/div[1]/div/criteriobusqueda/div/mat-form-field/div/div[1]/div/input").type ( parseFloat(sp[1] ));
      // Teclear numero de orden
      cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/mat-accordion/mat-expansion-panel/div/div/div/div/div[1]/div[2]/div/criteriobusqueda/div/mat-form-field/div/div[1]/div/input").type ( parseFloat(sp[0] ));

      // buscar ordenes
      cy.xpath("/html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/mat-accordion/mat-expansion-panel/mat-expansion-panel-header/span[1]/div/div[3]/button[3]").click();

      // seleccionar primer elemento
      cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/listaresultados/mat-expansion-panel/div/div/div/aol-tablegroup/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper/datatable-body-row/div[1]/datatable-body-cell[1]/div").click();

      // desplegar menu de opciones
      cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/listaresultados/mat-expansion-panel/mat-expansion-panel-header/span[1]/div/top-menu/button").click();

      // Seleccionar Facturación
      cy.xpath("//html/body/div[3]/div[2]/div/div/div/span[4]/span/button").click();
      
      // Seleccionar generar facturas
      cy.xpath("//html/body/div[3]/div[3]/div/div/div/span[2]/span/button").click();
      
      // pinchar aceptar descarga
      cy.xpath("//html/body/div[3]/div[2]/div/mat-dialog-container/generarfacturas/mat-card/mat-card-title/div/div/button").click();


    });
  });
});