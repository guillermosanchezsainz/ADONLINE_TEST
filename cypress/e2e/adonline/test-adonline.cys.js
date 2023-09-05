require('cypress-xpath');
import "cypress-real-events/support";
import {loginPageAdonline} from '../utils/LoginPageAdonline.js';
import {utilsPage} from '../utils/UtilsPage.js';

function seccion2(numberRef)
{
  // Abrir menu de busquedas
  cy.xpath("//html/body/app-root/content-area/div/div[1]/div/div/button[1]").click();
  // Buscar ordenes
  cy.xpath("//html/body/app-root/content-area/div/div[1]/div/div/div/div/button[2]").click();
  let sp = numberRef.split("/");
  cy.log ( sp[0]);
  cy.log ( sp[1]);
  // Teclear año
  cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/mat-accordion/mat-expansion-panel/div/div/div/div/div[1]/div[1]/div/criteriobusqueda/div/mat-form-field/div/div[1]/div/input").type ( parseFloat(sp[1] ));
  // Teclear numero de orden
  cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/mat-accordion/mat-expansion-panel/div/div/div/div/div[1]/div[2]/div/criteriobusqueda/div/mat-form-field/div/div[1]/div/input").type ( parseFloat(sp[0] ));

  // buscar ordenes
  cy.xpath("/html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/mat-accordion/mat-expansion-panel/mat-expansion-panel-header/span[1]/div/div[3]/button[3]").click();

  // Seleccionar primera orden
  cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/listaresultados/mat-expansion-panel/div/div/div/aol-tablegroup/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper/datatable-body-row/div[2]/datatable-body-cell[1]/div/div/div/span").click();
  
  cy.wait ( 400);
  // Seleccionar primer pedido
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-content/div/div[3]/div/div[2]/aol-treetable/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper[1]/datatable-body-row/div[2]/datatable-body-cell[2]/div/div/div/span").click();
  
  // Ir a Materiales
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[4]/div[1]/label").click();

  cy.wait ( 400);
  // cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-materiales/div/div[2]/div/mat-table/mat-row[1]/mat-cell[1]/div/div/div/button[1]/span/mat-icon").click({force:true});
  // cy.get("imgBuscar").click({force:true});
  // cy.get('input[type=file]').click({force:true});

  /* let c = 0;
  cy.get('input[type=file]').then ( arr => 
  {
    cy.log(arr);
    console.log(arr);
    arr[1].click({force:true}); 
    
  });
  */

  /* cy.get('body').then($body => {        
    if ($body.find('input[type=file]').length)
    {
      cy.log($body.find('input[type=file]'));
      console.log($body.find('input[type=file]'));
    }
  }); */

  /*  cy.get('#imgBuscar').invoke ( 'val' ).then -( text => {
    cy.log( text);
  }); */

  /* cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-materiales/div/div[2]/div/mat-table/mat-row[1]/mat-cell[1]/div/div/div/button[1]").get('input[type=file]').then ( arrrr => {
    cy.log("OLE OLE OLE");
    cy.log(arrrr);
  }); */

  /* cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-materiales/div/div[2]/div/mat-table/mat-row[1]/mat-cell[1]/div/div/div/button[1]").siblings().then ( arrrr => {
    cy.log("OLE OLE OLE 2222");
    cy.log(arrrr);
    console.log(arrrr[1]);
  });

  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-materiales/div/div[2]/div/mat-table/mat-row[1]/mat-cell[1]/div/div/div/input[1]").then ( arrrr => {
    cy.log("OLE OLE OLE 3333");
    cy.log(arrrr);
    console.log(arrrr[1]);
  }); */

  /* cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-materiales/div/div[2]/div/mat-table/mat-row[1]/mat-cell[1]/div/div/div/input[1]").selectFile({
    contents: Cypress.Buffer.from('file contents'),
    fileName: 'file.txtC:\DESARROLLO\CYPRESS\ADONLINE_TEST\img\flores.jpg',
    mimeType: 'text/plain',
    lastModified: Date.now(),
  }, { force: true }); */

  // Seleccionar imagen y subirla
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-materiales/div/div[2]/div/mat-table/mat-row[1]/mat-cell[1]/div/div/div/input[1]").selectFile('cypress/fixtures/flores.jpg' , { force: true });

  cy.wait ( 6000 );

  // Guardar
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-title/div[2]/button[1]").click({force: true});

  cy.wait ( 6000 );
  
  // Ir a Calendario
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[5]/div[1]/label").click();

  // checkea un anuncio
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[5]/div/tab-ori-calen/div/div[1]/div/table/tbody/tr/th/div[2]/div/div/div[2]/aol-datatable/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper/datatable-body-row/div[1]/datatable-body-cell[1]/div").click( { forced: true});
    
  // Ojo no se pudo usar esto porque tiene tamaño cero. he tenido que acceder al padre.        
  //cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[5]/div/tab-ori-calen/div/div[1]/div/table/tbody/tr/th/div[2]/div/div/div[2]/aol-datatable/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper/datatable-body-row/div[1]/datatable-body-cell[1]/div/label/input
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[5]/div/tab-ori-calen/div/div[1]/div/table/tbody/tr/th/div[2]/div/div/div[2]/aol-datatable/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper/datatable-body-row/div[1]/datatable-body-cell[1]/div/label/input").then ( elemen =>
  {
    cy.log('hay un check');
    cy.log(elemen);
    console.log(elemen);
  });

  // darle a opciones del anuncio
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[5]/div/tab-ori-calen/div/div[1]/div/table/tbody/tr/th/div[2]/div/div/div[1]/top-menu/button").click();

  // Cambiar estado
  cy.xpath("//html/body/div[3]/div[2]/div/div/div/span[2]/span/button/span").click();

  // Select Estado
  cy.xpath("/html/body/div[3]/div[2]/div/mat-dialog-container/anular_cancelar/mat-card/mat-card-content/mat-tab-group/div/mat-tab-body[1]/div/div[1]/div/mat-form-field/div/div[1]/div/mat-select").click();

  // seleccionar publicado
  cy.xpath("/html/body/div[3]/div[4]/div/div/div").contains("Publicado").click();

  cy.wait( 1000 );

  // Aceptar
  cy.xpath("//html/body/div[3]/div[2]/div/mat-dialog-container/anular_cancelar/mat-card/mat-card-title/div/div/button").click();

  cy.wait( 4000 );
  // Validar
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-title/div/div/div/button").click();

  // Guardar
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-title/div[2]/button[1]").click();

  //Seleccionar otro pedido
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-content/div/div[3]/div/div[2]/aol-treetable/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper[2]/datatable-body-row/div[2]/datatable-body-cell[1]/div/mat-checkbox").click( { forced: true});

  // Abrir menu de opciones
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-title/div[2]/div/button").click();

// Seleccionar facturaración
  cy.xpath("//html/body/div[3]/div[2]/div/div/div/button[4]").click();

  // Seleccionar facturar
  cy.xpath("//html/body/div[3]/div[3]/div/div/div/button[3]").click();

  // Confirmar Facturacion
  cy.xpath("//html/body/div[3]/div[2]/div/mat-dialog-container/alert/div/mat-card/mat-card-actions/div/button[2]").click();

  cy.wait( 400 );
  // Guardar
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-title/div[2]/button[1]").click();
  cy.wait ( 6000);

  // Cerrar la orden sin grabar
  /* cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-title/div[2]/button[3]").click();

  cy.get('body').then($body => {
    // If the element doesn't exist, exit the callback
    if ($body.find('.alertAdvertencia').length)
    {
      if ($body.find('.alertAdvertencia').find('a:contains("¿Desea continuar con la entrada de la orden?")'))
      {
        
        // Confirmar continuar
        // cy.xpath("///html/body/div[3]/div[2]/div/mat-dialog-container/alert/div/mat-card/mat-card-actions/div/button[2]").click();
        $body.find('.alertAdvertencia').find('.btAlertAceptar').click();
        cy.log("SI");
        
        // Guardar
        cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-title/div[2]/button[1]").click();
      }else{
        cy.log("NO");
      }
    }
    else{
      cy.log("-------------------");
      // Guardar
      cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-title/div[2]/button[1]").click();
    }
  });
  */


  // Cerrar la orden
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-title/div[2]/button[3]").click();

  // Abrir menu de busquedas
  cy.log("Abrir menu de busquedas");
  cy.xpath("//html/body/app-root/content-area/div/div[1]/div/div/button[1]").click();

  // seleccionamos el elemento facturado
  cy.log("seleccionamos el elemento facturado");
  cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/listaresultados/mat-expansion-panel/div/div/div/aol-tablegroup/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper/datatable-body-row/div[1]/datatable-body-cell[1]/div").click();

  cy.log("1");
  cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/listaresultados/mat-expansion-panel/mat-expansion-panel-header/span[1]/div/top-menu/button").click();
  cy.log("2");
  cy.xpath("//html/body/div[3]/div[2]/div/div/div/span[4]/span/button").click();
  cy.log("3");
  cy.xpath("//html/body/div[3]/div[3]/div/div/div/span[1]/span/button").click();
  
  cy.log("4");
  cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div[2]/gesbusqueda/div/listaresultados/mat-expansion-panel/mat-expansion-panel-header/span[2]").click();

  cy.log("6");
  cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div[2]/gesbusqueda/div/listaresultados/mat-expansion-panel/mat-expansion-panel-header/span[1]/div/top-menu/button").click();

  cy.log("7");
  cy.xpath("//html/body/div[3]/div[2]/div/div/div/span[4]/span/button").click();
  
  cy.log("8");
  cy.xpath("//html/body/div[3]/div[3]/div/div/div/span[1]/span/button").click();

  // Expandir factura
  cy.log("Expandir factura");
  cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div[2]/gesbusqueda/div/listaresultados/mat-expansion-panel/mat-expansion-panel-header/span[2]").click();
  
  // click en la prefactura
  cy.log("click en la prefactura");
  cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div[2]/gesbusqueda/div/listaresultados/mat-expansion-panel/div/div/div/aol-tablegroup/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper/datatable-body-row/div[2]/datatable-body-cell[1]/div/div/div/span").click();
  
  // cierre Prefactura
  cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/prop-factura/div/mat-card/mat-card-title/div[2]/button").click();

  //Abrir Busqueda anterior
  cy.xpath("//html/body/app-root/content-area/div/div[1]/div/div/button[1]").click();

  //desplegar Órdenes
  cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div[3]/gesbusqueda/div/listaresultados/mat-expansion-panel/mat-expansion-panel-header/span[2]").click();

  //Abrir menu opciones
  cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div[3]/gesbusqueda/div/listaresultados/mat-expansion-panel/mat-expansion-panel-header/span[1]/div/top-menu/button").click();

  // Seleccionar Facturación
  cy.xpath("//html/body/div[3]/div[2]/div/div/div/span[4]/span/button").click();
      
  // Seleccionar generar facturas
  cy.xpath("//html/body/div[3]/div[3]/div/div/div/span[2]/span/button").click();
  
  // pinchar aceptar descarga
  cy.xpath("//html/body/div[3]/div[2]/div/mat-dialog-container/generarfacturas/mat-card/mat-card-title/div/div/button").click();


  
  cy.log("-----FIN TEST-----");
}

context('Test Adonline', () => {
  beforeEach(() => {
    // cy.visit('https://example.cypress.io/commands/assertions')
    cy.viewport(1400, 850);
    cy.loginAdonline('Jude Dennis', 'dennis');
  })

  describe('Primer test adonlie complejo', () => {
    let numberRef = "";
    it.only("test", ()=>{      
      // menú principal      
      cy.get('.mat-button-wrapper > .mat-blanco').click();
      
      // Nueva orden
      cy.get('.mat-24 path:nth-child(3)').click();
      
      // Añadir pedido
      cy.xpath('./html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-content/div/div[3]/div/div[2]/aol-treetable/ngx-datatable/div/datatable-header/div/div[3]/datatable-header-cell/div/button[1]/span/mat-icon').click();      
      
      // cy.xpath('/html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body/div/tab-datos-adline/div/div/div/div/mat-form-field/div/div[1]/div/mat-select/div/div[1]').type('General');
      // cy.xpath('/html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body/div/tab-datos-adline/div/div/div/div/mat-form-field/div/div[1]/div/mat-select/div/div[2]').click();

      /*
        cy.contains("Clasificados").parent().then ( element => {
          console.log(element);
        });
      */

      // cy.get("[name='idntipped']").select("Clasificados");
      // cy.get('mat-option', {withinSubject:null}).contains('General').click();//trigger('mousedown');
      // cy.contains("Clasificados").parent().parent().select(0);

      /*
      cy.get("[name='idntipped']").click();
      cy.contains('General').click();
      */
      
      /*
      cy.get("[name='IDNTIPPUB']").click();
      cy.contains("MockUp").click();
      */

      // rellenar datos formulario
      cy.get("[name='idntipped']").click();
      cy.contains('General').click();

      cy.get("[name='IDNEDICIO']").click();
      cy.contains("Madrid").click();

      cy.get("[name='IDNPRODUC']").click();
      cy.contains("Modules").click();
      //cy.contains("Prueba DAFNY").click();
      
      cy.xpath("/html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[1]/div/tab-datos-adline/div/div/div[5]/div[1]/adl-input/mat-form-field/div/div[1]/div/input").clear();
      cy.xpath("/html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[1]/div/tab-datos-adline/div/div/div[5]/div[1]/adl-input/mat-form-field/div/div[1]/div/input").type("2");
      cy.xpath("/html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[1]/div/tab-datos-adline/div/div/div[5]/div[2]/adl-input/mat-form-field/div/div[1]/div/input").clear();
      cy.xpath("/html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[1]/div/tab-datos-adline/div/div/div[5]/div[2]/adl-input/mat-form-field/div/div[1]/div/input").type("2");

      cy.get("[name='IDNTIPORI']").click();
      cy.contains("Upload File").click();

      // Calendario
      cy.xpath("//content-area//nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[4]/div[1]/label").click();

      //cy.xpath("/html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-ori-calen/div/div[1]/div/table/tbody/tr/th/div[2]/div/div/table/tbody/tr[2]/td[34]/calendariooriginaldia/div/div/div").click();
      // Elegir Fecha
      cy.xpath("/html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-ori-calen/div/div[1]/div/table/tbody/tr/th/div[2]/div/div/table/tbody/tr[4]/td[30]/calendariooriginaldia/div/div/div").click();

      // cy.wait ( 400);

      /* cy.log(Cypress.$(".bt-dialog-aceptar").length);
      cy.log(Cypress.$("[role='dialog']").length);

      cy.log(cy.$$("[role='dialog']")); */

      // cy.get("[role='dialog']");
      // cy.get(".bt-dialog-aceptar").should("exist");

      // cy.log(Cypress.$("btAlertAceptar").length);
      cy.get('body').then($body => {
        // If the element doesn't exist, exit the callback
        if ($body.find('.alertError').length)
        {
          if ($body.find('.alertError').find('a:contains("no tiene tarifa")'))
          {
            $body.find('.alertError').find('.btAlertAceptar').click();
            cy.log("SI");
          }else{
            cy.log("NO");
          }
        }
        else{
          cy.log("-------------------");
        }
      });
      
      cy.get('body').then($body => {
        // If the element doesn't exist, exit the callback
        if (!$body.find('.btAlertAceptar').length)
        {

        }
        else{
          cy.get('.btAlertAceptar').click();
        }         
      });

      cy.wait ( 400);
      cy.xpath('/html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-title/div/div/div[1]/button').click();
      
      // cy.wait ( 400);
      // class="mat-focus-indicator mat-button mat-button-base bt-dialog-aceptar btAlertAceptar ng-star-inserted"
      //if ( Cypress.$('/html/body/div[3]/div[2]/div/mat-dialog-container/alert/div/mat-card/mat-card-actions/div[1]/button[2]/span').length > 0 )
      {
        //cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/alert/div/mat-card/mat-card-actions/div[1]/button[2]/span').click();
      }

      /*
      cy.xpath("/html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-ori-calen/div/div[1]/div/table/tbody/tr/th/div[2]/div/div/table/tbody/tr[4]/td[34]/calendariooriginaldia/div/div/div").then( elem => {
        elem.click();
        if ( Cypress.$("/html/body/div[3]/div[2]/div/mat-dialog-container/alert/div/mat-card/mat-card-actions/div[1]/button[2]"))
        {
          cy.xpath("/html/body/div[3]/div[2]/div/mat-dialog-container/alert/div/mat-card/mat-card-actions/div[1]/button[2]").click();
        }
      });
      */
      
      //cy.xpath('/html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-title/div/div/div[1]/button');
      //cy.xpath('./html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-content/div/div[3]/div/div[2]/aol-treetable/ngx-datatable/div/datatable-header/div/div[3]/datatable-header-cell/div/button[1]/span/mat-icon').click();

      cy.log("ASDFASDFASDFASDF");
      cy.wait ( 400);
      cy.xpath('/html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-content/div/div[3]/div/div[2]/aol-treetable/ngx-datatable/div/datatable-header/div/div[3]/datatable-header-cell/div/button[1]').click();
      
      cy.get("[name='idntipped']").click();
      cy.contains('AdServer Plus').click();

      cy.get("[name='IDNTIPPUB']").click();
      cy.contains("ProtecmediaNews").click(); 

      cy.get("[name='IDNEDICIO']").click();
      cy.contains("Web Site").click();

      cy.get("[name='IDNPRODUC']").click();
      cy.contains("GIGABANNER-TOP_970x90").click();

      cy.xpath("//content-area//nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[4]/div[1]/label").click();
      cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[2]/div[1]/label").click();

      cy.get("[name='strproads']").should( "be.enabled", 0, {message: 'hemos pasado'}).clear().type("26/07/2023-13:25");
      
      cy.get("[name='sLineItemName']").should( "be.enabled").clear().type("26/07/2023-13:25");

      cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[2]/div/tab-ad-server/div/div[5]/div[3]/adl-input/mat-form-field/div/div[1]/div/input").should( "be.enabled").clear().type("1500");

      // cy.xpath("//content-area//nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[4]/div[1]/label").click();
      cy.get("[name='strproads']").click();

      // Ir a Calendario
      cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[5]/div[1]/label").click();
      
      
      // sacar el formulario de rango de fechas
      cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[5]/div/tab-ori-calen/div/div[1]/div/table/tbody/tr/th/div[2]/div/div/generar-fechas/div[1]/div/div/div/date/div/div/mat-form-field/div/div[1]/div[2]/button").click();

      
      cy.get("[name='strdesde']").clear().type('05/08/2023');    
      cy.get("[name='strhasta']").click().clear().type('25/08/2023');
      cy.get("body").click();

      // pulsamos el boton generar
      cy.xpath("/html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[5]/div/tab-ori-calen/div/div[1]/div/table/tbody/tr/th/div[2]/div/div/generar-fechas/div[2]/div/div/button").click();

      cy.get('body').then($body => {
        // If the element doesn't exist, exit the callback
        if ($body.find('.mat-card-actions').length)
        {
          cy.wait ( 400);
          if ($body.find('.mat-card-actions').find('a:contains("El anuncio pasa a lista de espera por estar ya reservado el espacio solicitado")'))
          {
            $body.find('.mat-card-actions').find('.btAlertAceptar').click();
            cy.log("SI");
          }else{
            cy.log("NO");
          }
        }
        else{
          cy.log("-------------------");
        }
      });
      
      cy.get('body').then($body => {
        // If the element doesn't exist, exit the callback
        if ($body.find('.mat-card-actions').length)
        {
          cy.wait ( 400);
          if ($body.find('.mat-card-actions').find('a:contains("El anuncio pasa a lista de espera por estar ya reservado el espacio solicitado")'))
          {
            $body.find('.mat-card-actions').find('.btAlertAceptar').click();
            cy.log("SI");
          }else{
            cy.log("NO");
          }
        }
        else{
          cy.log("-------------------");
        }
      });

      cy.get('body').then($body => {
        // If the element doesn't exist, exit the callback
        if ($body.find('.mat-card-actions').length)
        {
          cy.wait ( 400);
          if ($body.find('.mat-card-actions').find('a:contains("El anuncio pasa a lista de espera por estar ya reservado el espacio solicitado")'))
          {
            $body.find('.mat-card-actions').find('.btAlertAceptar').click();
            cy.log("SI");
          }else{
            cy.log("NO");
          }
        }
        else{
          cy.log("-------------------");
        }
      });

      cy.get('body').then($body => {
        // If the element doesn't exist, exit the callback
        if ($body.find('.mat-card-actions').length)
        {
          cy.wait ( 400);
          if ($body.find('.mat-card-actions').find('a:contains("El anuncio pasa a lista de espera por estar ya reservado el espacio solicitado")'))
          {
            $body.find('.mat-card-actions').find('.btAlertAceptar').click();
            cy.log("SI");
          }else{
            cy.log("NO");
          }
        }
        else{
          cy.log("-------------------");
        }
      });

      cy.get('body').then($body => {
        // If the element doesn't exist, exit the callback
        if ($body.find('.mat-card-actions').length)
        {
          cy.wait ( 400);
          if ($body.find('.mat-card-actions').find('a:contains("El anuncio pasa a lista de espera por estar ya reservado el espacio solicitado")'))
          {
            $body.find('.mat-card-actions').find('.btAlertAceptar').click();
            cy.log("SI");
          }else{
            cy.log("NO");
          }
        }
        else{
          cy.log("-------------------");
        }
      });

      cy.get('body').then($body => {
        // If the element doesn't exist, exit the callback
        if ($body.find('.mat-card-actions').length)
        {
          cy.wait ( 400);
          if ($body.find('.mat-card-actions').find('a:contains("El anuncio pasa a lista de espera por estar ya reservado el espacio solicitado")'))
          {
            $body.find('.mat-card-actions').find('.btAlertAceptar').click();
            cy.log("SI");
          }else{
            cy.log("NO");
          }
        }
        else{
          cy.log("-------------------");
        }
      });
      
      // ir a Datos Ad Server
      cy.wait ( 400);
      cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[2]/div[1]/label").click();

      // Ir a Materiales
      cy.wait ( 400);
      cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[6]/div[1]/label").click();

      // Validar
      cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-title/div/div/div[1]/button").click();

      
      cy.wait ( 400);

      
      // Guardar
      cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-title/div[2]/button[1]").click();
      cy.wait ( 12000);

      cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-title/div[1]/div[1]/input")
      .invoke('val')
      .then ( text =>
      {
        cy.log(text);
        console.log(text);
        numberRef = text;
        cy.log(numberRef);
        // Cerrar
        cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-title/div[2]/button[3]").click();
        cy.wait ( 400);

        /* cy.xpath("//html/body/app-root/content-area/div/div[1]/div/div/button[1]").click();
        cy.xpath("//html/body/app-root/content-area/div/div[1]/div/div/div/div/button[2]").click();
        let sp = numberRef.split("/");
        cy.xpath("/html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/mat-accordion/mat-expansion-panel/div/div/div/div/div[1]/div[1]/div/criteriobusqueda/div/mat-form-field/div/div[1]/div/input").type ( numberRef.substring ( sp[0] ));
        cy.xpath("/html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/mat-accordion/mat-expansion-panel/div/div/div/div/div[1]/div[2]/div/criteriobusqueda/div/mat-form-field/div/div[1]/div/input").type ( numberRef.substring ( sp[1] )); */
        console.log(numberRef);
        cy.log(numberRef);
        seccion2(numberRef);
      });
    });

    it("test1", ()=>{
      let numberRef = "198/2023";
      seccion2(numberRef);
      /* // Buscar superior
      cy.xpath("//html/body/app-root/content-area/div/div[1]/div/div/button[1]").click();
      // Buscar ordenes
      cy.xpath("//html/body/app-root/content-area/div/div[1]/div/div/div/div/button[2]").click();
      let sp = numberRef.split("/");
      cy.log ( sp[0]);
      cy.log ( sp[1]);
      // Teclear año
      cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/mat-accordion/mat-expansion-panel/div/div/div/div/div[1]/div[1]/div/criteriobusqueda/div/mat-form-field/div/div[1]/div/input").type ( parseFloat(sp[1] ));
      // Teclear numero de orden
      cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/mat-accordion/mat-expansion-panel/div/div/div/div/div[1]/div[2]/div/criteriobusqueda/div/mat-form-field/div/div[1]/div/input").type ( parseFloat(sp[0] ));
    
      // buscar ordenes
      cy.xpath("/html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/mat-accordion/mat-expansion-panel/mat-expansion-panel-header/span[1]/div/div[3]/button[3]").click();

      // Seleccionar primera orden
      cy.xpath("//html/body/app-root/content-area/div/div[4]/gesbusquedas/div/div/div/gesbusqueda/div/listaresultados/mat-expansion-panel/div/div/div/aol-tablegroup/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper/datatable-body-row/div[2]/datatable-body-cell[1]/div/div/div/span").click();
      
      // Seleccionar primer pedido
      cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-content/div/div[3]/div/div[2]/aol-treetable/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper[1]/datatable-body-row/div[2]/datatable-body-cell[2]/div/div/div/span").click();
      
      // Ir a Materiales
      cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[4]/div[1]/label").click();

      cy.wait ( 400); */
      // cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-materiales/div/div[2]/div/mat-table/mat-row[1]/mat-cell[1]/div/div/div/button[1]/span/mat-icon").click({force:true});
      // cy.get("imgBuscar").click({force:true});
      // cy.get('input[type=file]').click({force:true});

      /* let c = 0;
      cy.get('input[type=file]').then ( arr => 
        {
          cy.log(arr);
          console.log(arr);
          arr[1].click({force:true}); 
          
        }); */

        /* cy.get('body').then($body => {        
          if ($body.find('input[type=file]').length)
          {
            cy.log($body.find('input[type=file]'));
            console.log($body.find('input[type=file]'));
          }
        }); */

       /*  cy.get('#imgBuscar').invoke ( 'val' ).then -( text => {
          cy.log( text);
        }); */

        /* cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-materiales/div/div[2]/div/mat-table/mat-row[1]/mat-cell[1]/div/div/div/button[1]").get('input[type=file]').then ( arrrr => {
          cy.log("OLE OLE OLE");
          cy.log(arrrr);
        }); */

        /* cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-materiales/div/div[2]/div/mat-table/mat-row[1]/mat-cell[1]/div/div/div/button[1]").siblings().then ( arrrr => {
          cy.log("OLE OLE OLE 2222");
          cy.log(arrrr);
          console.log(arrrr[1]);
        });

        cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-materiales/div/div[2]/div/mat-table/mat-row[1]/mat-cell[1]/div/div/div/input[1]").then ( arrrr => {
          cy.log("OLE OLE OLE 3333");
          cy.log(arrrr);
          console.log(arrrr[1]);
        }); */

        /* cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-materiales/div/div[2]/div/mat-table/mat-row[1]/mat-cell[1]/div/div/div/input[1]").selectFile({
          contents: Cypress.Buffer.from('file contents'),
          fileName: 'file.txtC:\DESARROLLO\CYPRESS\ADONLINE_TEST\img\flores.jpg',
          mimeType: 'text/plain',
          lastModified: Date.now(),
        }, { force: true }); */

        /* // Seleccionar imagen y subirla
        cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[4]/div/tab-materiales/div/div[2]/div/mat-table/mat-row[1]/mat-cell[1]/div/div/div/input[1]").selectFile('cypress/fixtures/flores.jpg' , { force: true });

        cy.wait ( 6000 );

        // Guardar
        cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-title/div[2]/button[1]").click({force: true});

        cy.wait ( 6000 );
      
        // Ir a Calendario
        cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[5]/div[1]/label").click();

        // checkea un anuncio
        cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[5]/div/tab-ori-calen/div/div[1]/div/table/tbody/tr/th/div[2]/div/div/div[2]/aol-datatable/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper/datatable-body-row/div[1]/datatable-body-cell[1]/div").click( { forced: true});
        
        // Ojo no se pudo usar esto porque tiene tamaño cero. he tenido que acceder al padre.        
        //cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[5]/div/tab-ori-calen/div/div[1]/div/table/tbody/tr/th/div[2]/div/div/div[2]/aol-datatable/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper/datatable-body-row/div[1]/datatable-body-cell[1]/div/label/input
        cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[5]/div/tab-ori-calen/div/div[1]/div/table/tbody/tr/th/div[2]/div/div/div[2]/aol-datatable/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper/datatable-body-row/div[1]/datatable-body-cell[1]/div/label/input").then ( elemen =>
          {
            cy.log('hay un check');
            cy.log(elemen);
            console.log(elemen);
          }
        );

        // darle a opciones del anuncio
        cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-content/div/mat-tab-group/div/mat-tab-body[5]/div/tab-ori-calen/div/div[1]/div/table/tbody/tr/th/div[2]/div/div/div[1]/top-menu/button").click();

        // Cambiar estado
        cy.xpath("//html/body/div[3]/div[2]/div/div/div/span[2]/span/button/span").click();

        // Select Estado
        cy.xpath("/html/body/div[3]/div[2]/div/mat-dialog-container/anular_cancelar/mat-card/mat-card-content/mat-tab-group/div/mat-tab-body[1]/div/div[1]/div/mat-form-field/div/div[1]/div/mat-select").click();

        // seleccionar publicado
        cy.xpath("/html/body/div[3]/div[4]/div/div/div").contains("Publicado").click();

        // Aceptar
        cy.xpath("//html/body/div[3]/div[2]/div/mat-dialog-container/anular_cancelar/mat-card/mat-card-title/div/div/button").click();

        // Validar
        cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/div/tabs-originals/div/mat-card/mat-card-title/div/div/div/button").click();

        //Seleccionar otro pedido
        cy.xpath("//html/body/app-root/content-area/div/div[3]/div/div/nuevaorden/div[1]/mat-card/mat-card-content/div/div[3]/div/div[2]/aol-treetable/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper[2]/datatable-body-row/div[2]/datatable-body-cell[1]/div/mat-checkbox").click( { forced: true}); */


    });
  });
});

