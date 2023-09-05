
function dateToString(dt)
{
  let dd = dt.getDate().toString();
  if ( dd.length == 1 )
    dd = "0" + dd;
  let mm = dt.getMonth()
  mm + 1;
  if ( mm.toString().length == 1 )
    mm = "0" + mm;
  let yy = dt.getFullYear();
  return dd + "/" + mm + "/" + yy;
}

context('Test Shipo', () => {
  beforeEach(() => {
    // cy.visit('https://example.cypress.io/commands/assertions')
    cy.viewport(1400, 850);
    cy.loginShipo('Shipo', 'shipo');
  })

  describe('Primer test Shipo complejo', () => {
    let numberRef = "";
    it.only ( "Test Suscripcion Shipo", ()=> {
      cy.abrirMenuSeccion();
      cy.seleccionarSuscripciones();
      cy.abrirMenuSuscripciones();
      cy.abrirGestionComercial();
      
      
      /* let idCli = "2014845";
      cy.abrirCRM();
      cy.getPath("Buscar Cliente", "//shared-buscador-clientes/div/div[1]/div[2]/mat-form-field/div/div[1]/div[4]/div/input").type(idCli + "{enter}");
      cy.getPath("Editar Cliente", "//shared-buscador-tabla/div/shared-data-table/div/div[3]/div[2]/cdk-virtual-scroll-viewport/div[1]/div/div[3]/span").click();
      cy.getPath("Editar suscripciones","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[2]/div[1]/div").click();

      cy.wait( 400 );

      cy.contains("ACCIONES").click();
      cy.contains("Suspender el envío").click();

      let dt = new Date();
      dt.setMonth(dt.getMonth() + 2);
      let fIni = dateToString(dt);
      dt.setMonth(dt.getMonth() + 4);
      let fFin = dateToString(dt);

      cy.log ( fIni )
      cy.log ( fFin )
      cy.comboSelect("Editar suscripciones","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/mat-tab-group/div/mat-tab-body[2]/div/div/div/mat-accordion/shared-panel-suscripcion/mat-expansion-panel/div/div/div/div[2]/div/shared-panel-accion/div/shared-suspender-envio/div/mat-horizontal-stepper/div[2]/div[1]/form/div/shared-autocomplete/mat-form-field/div/div[1]/div[1]/input", null, "Holidays with vouchers" );
      cy.getPath("Editar suscripciones","//shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/mat-tab-group/div/mat-tab-body[2]/div/div/div/mat-accordion/shared-panel-suscripcion/mat-expansion-panel/div/div/div/div[2]/div/shared-panel-accion/div/shared-suspender-envio/div/mat-horizontal-stepper/div[2]/div[1]/form/div/div[2]/shared-picker/mat-form-field/div/div[1]/div[1]/input").type(fIni);
      cy.getPath("Editar suscripciones","//shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/mat-tab-group/div/mat-tab-body[2]/div/div/div/mat-accordion/shared-panel-suscripcion/mat-expansion-panel/div/div/div/div[2]/div/shared-panel-accion/div/shared-suspender-envio/div/mat-horizontal-stepper/div[2]/div[1]/form/div/shared-picker/mat-form-field/div/div[1]/div[1]/input").type(fFin);
      cy.comboSelect("Editar suscripciones","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/mat-tab-group/div/mat-tab-body[2]/div/div/div/mat-accordion/shared-panel-suscripcion/mat-expansion-panel/div/div/div/div[2]/div/shared-panel-accion/div/shared-suspender-envio/div/mat-horizontal-stepper/div[2]/div[1]/form/div/shared-autocomplete/mat-form-field/div/div[1]/div[1]/input", null, "On holidays" );
      
      cy.getPath("Siguiente","//shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/mat-tab-group/div/mat-tab-body[2]/div/div/div/mat-accordion/shared-panel-suscripcion/mat-expansion-panel/div/div/div/div[2]/div/shared-panel-accion/div/shared-suspender-envio/div/div/div[2]/button[2]").click();

      cy.getPath("Prolongar","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/mat-tab-group/div/mat-tab-body[2]/div/div/div/mat-accordion/shared-panel-suscripcion/mat-expansion-panel/div/div/div/div[2]/div/shared-panel-accion/div/shared-suspender-envio/div/mat-horizontal-stepper/div[2]/div[2]/form/div/div[1]/div/mat-button-toggle-group/mat-button-toggle[2]/button").click();

      cy.getPath("Siguiente","//shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/mat-tab-group/div/mat-tab-body[2]/div/div/div/mat-accordion/shared-panel-suscripcion/mat-expansion-panel/div/div/div/div[2]/div/shared-panel-accion/div/shared-suspender-envio/div/div/div[2]/button[2]").click();

      cy.getPath("Nuevo suscriptor","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/mat-tab-group/div/mat-tab-body[2]/div/div/div/mat-accordion/shared-panel-suscripcion/mat-expansion-panel/div/div/div/div[2]/div/shared-panel-accion/div/shared-suspender-envio/div/mat-horizontal-stepper/div[2]/div[3]/div/shared-notificacion/div/mat-expansion-panel/mat-expansion-panel-header/span/mat-panel-description/mat-slide-toggle/label/div").click();
      cy.getPath("Siguiente","//shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/mat-tab-group/div/mat-tab-body[2]/div/div/div/mat-accordion/shared-panel-suscripcion/mat-expansion-panel/div/div/div/div[2]/div/shared-panel-accion/div/shared-suspender-envio/div/div/div[2]/button[2]").click();
      cy.getPath("Confirmar","//shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/mat-tab-group/div/mat-tab-body[2]/div/div/div/mat-accordion/shared-panel-suscripcion/mat-expansion-panel/div/div/div/div[2]/div/shared-panel-accion/div/shared-suspender-envio/div/div/div[2]/button[2]").click();
      cy.getPath("Entendido","//mat-dialog-container/dlg-shared-info/div[2]/button").click();


      return; */
      
      cy.abrirNuevaSuscripcion();      
      
      // Cambiar Fecha de inicio
      cy.wait( 1000 );
      cy.getPath("Cambiar Fecha de inicio", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/inicio-contratacion-suscripcion/div/div[1]/div[1]/div/div[1]/shared-picker/mat-form-field/div/div[1]/div[1]/input" ).clear().type ( "10/09/2023", {force: true});
      cy.getPath("Desplegar tipo de contrato", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/inicio-contratacion-suscripcion/div/div[1]/div[1]/shared-autocomplete/mat-form-field/div/div[1]/div[1]/input").click();      
      cy.getPath("Seleccionar 'Direct contract'", "//html/body/div[2]/div[6]/div/div/cdk-virtual-scroll-viewport/div[1]").contains("Direct contract").click();

      cy.getPath("Añadir tarifa", "/html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/inicio-contratacion-suscripcion/div/div[2]/div[1]/div/mat-expansion-panel[1]/div/div/div/div[5]/div[9]/div[4]/div[2]/button").click();

      cy.get('body').then($body => {
        // If the element doesn't exist, exit the callback
        if ($body.find(':contains("La fecha de inicio no es compatible con el plan seleccionado. ¿Desea reemplazarla por la siguiente fecha disponible?")'))
        {
          cy.getPath("Reemplazar fecha del plan seleccionado", "//html/body/div[2]/div[7]/div/mat-dialog-container/dlg-shared-info/div[2]/button[2]").click();
        }
        else
        {
          cy.log("La fecha es compatible con la tarifa");
          cy.allure().step("La fecha es compatible con la tarifa");
        }         
      });

      cy.getPath("Pulsar boton Aplicar de la tabla descuenteo Employees", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/inicio-contratacion-suscripcion/div/div[2]/div[1]/div/mat-expansion-panel[2]/div/div/div/div[2]/div[1]/div[3]/div[2]/button").click();
      
      cy.getPath("Cambiar descuento a 99%", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/inicio-contratacion-suscripcion/div/div[2]/div[1]/div/mat-expansion-panel[2]/div/div/div/div[3]/div/shared-input/mat-form-field/div/div[1]/div[1]/input").clear().type("99");

      cy.getPath("Pulsar Aplicar descuento manual", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/inicio-contratacion-suscripcion/div/div[2]/div[1]/div/mat-expansion-panel[2]/div/div/div/div[3]/div/button").click();
      
      cy.get('body').then($body => {
        // If the element doesn't exist, exit the callback
        if ($body.find(':contains("Uno de los productos supera el descuento máximo asignado")'))
        {
          cy.getPath("Alerta de porcentaje excesivo", "/html/body/div[2]/div[6]").click({force: true});
        }
        else
        {
          cy.log("La tarifa está dentro de los parámetros");
          cy.allure().step("La tarifa está dentro de los parámetros");
        }
      });

      cy.getPath("Cambiar descuento a 5%", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/inicio-contratacion-suscripcion/div/div[2]/div[1]/div/mat-expansion-panel[2]/div/div/div/div[3]/div/shared-input/mat-form-field/div/div[1]/div[1]/input").clear().type("5");
      
      cy.getPath("Pulsar Aplicar descuento manual", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/inicio-contratacion-suscripcion/div/div[2]/div[1]/div/mat-expansion-panel[2]/div/div/div/div[3]/div/button").click();

      cy.getPath("Pulsar Añadir componente", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/inicio-contratacion-suscripcion/div/div[2]/div[1]/div/mat-expansion-panel[3]/div/div/div/button").click();

      cy.getPath("Pulsar Producto", "//html/body/div[2]/div[7]/div/div/div/button[1]").click();

      cy.getPath("Abrir seleccionable de producto", "//html/body/div[2]/div[7]/div/mat-dialog-container/dlg-add-producto/div/div[1]/div/div[1]/shared-autocomplete/mat-form-field/div/div[1]/div[1]/input").click();
      cy.getPath("Seleccionar  'Protec Magazin - Protec magazin Madrid'", "//html/body/div[2]/div[7]/div/mat-dialog-container/dlg-add-producto/div/div[1]/div/div[1]/shared-autocomplete/mat-form-field/div/div[1]/div[1]/input").type("Protec Magazin - Protec magazin Madrid");
      cy.getContains("Selecciono 'Protec Magazin - Protec magazin Madrid'", "Protec Magazin - Protec magazin Madrid").then( element =>{
        element.click();
      });

      /*
        cy.getPath("Seleccionar  'Protec News - General edition'", "//html/body/div[2]/div[7]/div/mat-dialog-container/dlg-add-producto/div/div[1]/div/div[1]/shared-autocomplete/mat-form-field/div/div[1]/div[1]/input").type("Protec News - General edition");
        cy.getContains("Selecciono 'Protec News - General edition'", "Protec News - General edition").then( element =>{
          element.click();
        });     
        cy.getPath("Desplegar Tarifas  'Eventos'", "//html/body/div[2]/div[7]/div/mat-dialog-container/dlg-add-producto/div/div[1]/div/div[2]/shared-autocomplete/mat-form-field/div/div[1]/div/mat-select/div/div[2]/div").click();
        
        cy.getPath("Seleccionar  'Eventos'", "//html/body/div[2]/div[9]/div/div/div/mat-option[1]/span/div").click();
      */

      cy.getPath("añadir producto", "//html/body/div[2]/div[7]/div/mat-dialog-container/dlg-add-producto/div/div[2]/button[2]").click();

      cy.wait( 400 );
      
      //--//cy.getPath("Comenzar contratación", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/inicio-contratacion-suscripcion/div/div[2]/div[2]/shared-cesta-suscripcion/div/div[4]/div/button").click();
      
      cy.getPath("Comenzar contratación", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/inicio-contratacion-suscripcion/div/div[2]/div[2]/shared-cesta-suscripcion/div/div[3]/button").click();
      cy.allure().endStep("fin");
      cy.allure().startStep("Editar ficha de nuevo cliente");
      
      //--//cy.comboSelect("Tipo persona: 'Indeterminada'", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-autocomplete[3]/mat-form-field/div/div[1]/div/mat-select", null, "Indeterminada" );
      //--//cy.comboSelect("Tipo de documento: 'NIF'", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/div[1]/shared-autocomplete/mat-form-field/div/div[1]/div/mat-select", null, "NIF" );      
      //--//cy.getPath("", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/div[1]/shared-input/mat-form-field/div/div[1]/div").click({force: true});
      //--//cy.getPath("", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/div[1]/shared-input/mat-form-field/div/div[1]/div").clear();
      //--//cy.getPath("Número de documento: 'SUSCRIPTOR4'", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/div[1]/shared-input/mat-form-field/div/div[1]/div").type("SUSCRIPTOR4");
      //--//cy.getPath("Nombre: 'Suscriptor'","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[1]/mat-form-field/div/div[1]/div/input").type("Suscriptor");
      //--//cy.getPath("Apellido 1: 'NOAPE'","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[2]/mat-form-field/div/div[1]/div").type("NOAPE");
      //--//cy.getPath("Descripción: 'Suscriptor NOAPE'","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[4]/mat-form-field/div/div[1]/div").type("Suscriptor NOAPE");
      //--//cy.getPath("Nombre via: 'noName'","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[5]/mat-form-field/div/div[1]/div").type("noName");
      //--//cy.getPath("Número via: '12'","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[6]/mat-form-field/div/div[1]/div").type("12");
      //--//cy.getPath("Código postal: '28100'","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[9]/mat-form-field/div/div[1]/div[1]").type("28100");
      
      cy.comboSelect("", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-autocomplete[3]/mat-form-field/div/div[1]/div/mat-select", null, "Indeterminada" );
      cy.comboSelect("", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/div[1]/shared-autocomplete/mat-form-field/div/div[1]/div/mat-select", null, "NIF" );
      cy.getPath("", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/div[1]/shared-input/mat-form-field/div/div[1]/div").click({force: true});
      // cy.getPath("", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/div[1]/shared-input/mat-form-field/div/div[1]/div").clear();
      const date = new Date().getTime();
      let suscriptor = "SUSCRIPTOR_" + date.toString();
      let suscrip = "NOAPE_" + date.toString();
      let name = "Suscriptor_" + date.toString();
      let SuscriptorNOAPE = "Suscriptor NOAPE " + date.toString();
      let desti = "desti" + date.toString() + "@nomail.com";
      let email = "suscriptor" + date.toString() + "@nomail.com";
      let nSus = date.toString();

      suscriptor = "SUSCRIPTOR";
      suscrip = "NOAPE";
      name = "Suscriptor";
      SuscriptorNOAPE = "Suscriptor NOAPE";      
      // desti = "desti@nomail.com";
      // email = "suscriptor@nomail.com";
      nSus = "4";

      cy.getPath("", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/div[1]/shared-input/mat-form-field/div/div[1]/div").type(suscriptor);
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[1]/mat-form-field/div/div[1]/div/input").type(name);
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[2]/mat-form-field/div/div[1]/div").type(suscrip);
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[4]/mat-form-field/div/div[1]/div").type(SuscriptorNOAPE);
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[5]/mat-form-field/div/div[1]/div").type("noName");
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[6]/mat-form-field/div/div[1]/div").type("12");
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[9]/mat-form-field/div/div[1]/div[1]").type("28100");
      // Correo 'suscriptor4@nomail.com"
      
      
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[11]/mat-form-field/div/div[1]/div[1]/input").type(email);
      
      cy.wait(400);
      // Telefono '999999999"
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[12]/mat-form-field/div/div[1]/div[1]").type("999999999");
      // checkbox email
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/shared-cliente-susc-datos-gen/div/div/div[6]/div/mat-checkbox[2]/label/span[1]/input").check({force:true});
      
      //Click Siguiente
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/div/div/button[2]").should("be.enabled").click();

      cy.get('body').then($body => {
        if ($body.find(':contains("campos con errores")' ))
        {
          cy.log("SI");
          cy.getPath("","//html/body/app-root/sh-status-bar/div/div[2]/span").should("exist");
          cy.getPath("","//html/body/app-root/sh-status-bar/div/div[2]/span").contains("campos con errores").click();
          cy.wait(1000);
          cy.getPath("","//html/body/app-root/sh-status-bar/div/div[2]/span").contains("campos con errores").click();
          
          //--//cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/shared-autocomplete[1]/mat-form-field/div/div[1]").type("Business");
          //--//cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/shared-autocomplete[2]/mat-form-field/div/div[1]").type("Big company");
          
          //--//cy.getPath("Reemplazar fecha del plan seleccionado 1", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/shared-autocomplete[1]/mat-form-field/div/div[1]/div[1]/input").click();
          //--//cy.getPath("Reemplazar fecha del plan seleccionado 2", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/shared-autocomplete[1]/mat-form-field/div/div[1]/div[1]/input").type=("Business");
          //--//cy.getPath("Reemplazar fecha del plan seleccionado 3", "//html/body/div[2]/div[6]/div/div/cdk-virtual-scroll-viewport/div[1]/mat-option/span/div").click();
          
          cy.comboSelect("11", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/shared-autocomplete[1]/mat-form-field/div/div[1]/div[1]/input", null, "Business" );
          cy.comboSelect("22", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/shared-autocomplete[2]/mat-form-field/div/div[1]", null, "Big company");

          cy.getPath("Desplegar", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/div[1]/div/shared-column-sel/div/div/div[1]/div[2]/div/mat-expansion-panel/mat-expansion-panel-header/span[1]/div/div/span[1]").click();
          cy.getPath("Seleccionar", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/div[1]/div/shared-column-sel/div/div/div[1]/div[2]/div/mat-expansion-panel/div/div/div[1]/mat-checkbox/label/span[1]").click();
          // cy.getPath("Reemplazar fecha del plan seleccionado", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/shared-autocomplete[2]/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span").type=("Big company");
          cy.getPath("Fecha", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/div[2]/div/shared-datos-auxiliares/div/div/div/shared-picker/mat-form-field/div/div[1]/div[1]/input").type("28/03/2023");
          cy.getPath("Campo auxiliar alfanumérico", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/div[3]/div/shared-datos-auxiliares/div/div[2]/div/shared-input/mat-form-field/div/div[1]/div/input").type("ABC123");
          cy.getPath("Campo auxiliar fecha", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/div[3]/div/shared-datos-auxiliares/div/div[3]/div/shared-picker/mat-form-field/div/div[1]/div[1]/input").type("27/03/2024");
          cy.getPath("Campo auxiliar numerico", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/div[3]/div/shared-datos-auxiliares/div/div[4]/div/shared-input/mat-form-field/div/div[1]/div/input").type("123456789");

          cy.getPath("Desplegar", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/div[5]/div/shared-column-sel/div/div/div[1]/div[2]/div/mat-expansion-panel[1]/mat-expansion-panel-header/span[1]/div/div/span[1]").click();
          cy.getPath("Seleccionar", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/div[5]/div/shared-column-sel/div/div/div[1]/div[2]/div/mat-expansion-panel[1]/div/div/div[1]/mat-checkbox/label/span[1]").click();

          cy.getPath("Desplegar", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/div[5]/div/shared-column-sel/div/div/div[1]/div[2]/div/mat-expansion-panel[2]/mat-expansion-panel-header/span[1]/div/div/span[1]").click();
          cy.getPath("Seleccionar", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/div[5]/div/shared-column-sel/div/div/div[1]/div[2]/div/mat-expansion-panel[2]/div/div/div[1]/mat-checkbox/label/span[1]").click();

          cy.getPath("Desplegar", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/div[6]/div/shared-column-sel/div/div/div[1]/div[2]/div/mat-expansion-panel/mat-expansion-panel-header/span[1]/div/div/span[1]").click();
          cy.getPath("Seleccionar", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[1]/div/shared-suscriptor-view/div/mat-card/div/div[4]/div[2]/div[6]/div/shared-column-sel/div/div/div[1]/div[2]/div/mat-expansion-panel/div/div/div[1]/mat-checkbox/label/span[2]/span[2]").click();
          cy.getPath("","//html/body/app-root/sh-status-bar/div/div[2]/span").should("not.exist");
          cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/div/div/button[2]").should("be.enabled").click();
        }
        else
        {
          cy.log("NO");
        }
      });
      
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/mat-radio-group/div/mat-radio-button/label/span[2]/span[2]").click();
      cy.comboSelect("211", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-autocomplete[3]", "//html/body/div[2]/div[7]/div/div/div/mat-option[2]/span/div", "Indeterminada");
      
      cy.wait(500);
      cy.comboSelect("311", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/div[1]/shared-autocomplete/mat-form-field/div/div[1]/div/mat-select", "//html/body/div[2]/div[7]/div/div/div/mat-option[2]/span/div", "NIF");
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/div[1]/shared-input/mat-form-field/div/div[1]/div").type("DESTINATARIO");
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[1]/mat-form-field/div/div[1]/div/input").type("Destina");
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[2]/mat-form-field/div/div[1]/div/input").type("NoApe");
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[4]/mat-form-field/div/div[1]/div").type("Destina NoApe");
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[5]/mat-form-field/div/div[1]/div/input").type("NoName");
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[6]/mat-form-field/div/div[1]/div/input").type("12");

      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[7]/mat-form-field/div/div[1]/div/input").type("1");
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[8]/mat-form-field/div/div[1]/div/input").type("U");
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[9]/mat-form-field/div/div[1]/div[1]/input[2]").type("28001");
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[11]/mat-form-field/div/div[1]/div[1]/input").type(desti);
      cy.wait(400);
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/shared-dir/div/shared-dir-esp/div/shared-input[12]/mat-form-field/div/div[1]/div[1]").type("999999999");
      
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/div[1]/shared-input/mat-form-field/div/div[1]/div").type(nSus);
      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[2]/div/shared-destina-view/div/div[1]/mat-card/div/shared-cliente-susc-datos-gen/div/div/div[5]/div/mat-checkbox[2]/label/span[1]/input").check({force:true});

      cy.getPath("","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/div/div/button[2]").click();
      cy.allure().endStep("FIN ficha de nuevo cliente");
      cy.getPath("Utilizar una dirección guardada","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[3]/div/shared-entrega-view/div/div[1]/mat-tab-group/div/mat-tab-body/div/shared-entrega-tab/div/mat-accordion/mat-expansion-panel/div/div/shared-entrega-form/div/mat-card/mat-expansion-panel[1]/mat-expansion-panel-header/span[1]/div/span").click();
      cy.getPath("Siguiente", "//html/body/div[2]/div[7]/div/mat-dialog-container/dlg-seleccionar-otra-direccion/div/div[3]/button[2]").click();


      cy.comboSelect("Seleccionar 'Protec Magazin - Protec magazin Madrid'", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[3]/div/shared-entrega-view/div/div[1]/mat-tab-group/div/mat-tab-body/div/shared-entrega-tab/div/mat-accordion/mat-expansion-panel/div/div/shared-entrega-form/div/mat-card/mat-expansion-panel[2]/div/div/div/div[1]/div[2]/shared-autocomplete[1]/mat-form-field/div/div[1]/div/mat-select/div/div[1]", "//html/body/div[2]/div[7]/div/div/div/mat-option[2]/span/div", "Protec News-General edition");
      cy.comboSelect("Seleccionar 'AREA JohnFalvey(R)'", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[3]/div/shared-entrega-view/div/div[1]/mat-tab-group/div/mat-tab-body/div/shared-entrega-tab/div/mat-accordion/mat-expansion-panel/div/div/shared-entrega-form/div/mat-card/mat-expansion-panel[2]/div/div/div/div[2]/shared-autocomplete[2]/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span", null, "AREA JohnFalvey(R)");
      cy.comboSelect("Seleccionar 'Promotions delivery'", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[3]/div/shared-entrega-view/div/div[1]/mat-tab-group/div/mat-tab-body/div/shared-entrega-tab/div/mat-accordion/mat-expansion-panel/div/div/shared-entrega-form/div/mat-card/mat-expansion-panel[3]/div/div/div/shared-autocomplete[1]/mat-form-field/div/div[1]/div[1]/input", null, "Promotions delivery");
      cy.comboSelect("Seleccionar 'Mailbox'", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[3]/div/shared-entrega-view/div/div[1]/mat-tab-group/div/mat-tab-body/div/shared-entrega-tab/div/mat-accordion/mat-expansion-panel/div/div/shared-entrega-form/div/mat-card/mat-expansion-panel[3]/div/div/div/shared-autocomplete[2]/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span", null, "Mailbox");
      cy.comboSelect("Seleccionar 'Madrid city centre'", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[3]/div/shared-entrega-view/div/div[1]/mat-tab-group/div/mat-tab-body/div/shared-entrega-tab/div/mat-accordion/mat-expansion-panel/div/div/shared-entrega-form/div/mat-card/mat-expansion-panel[3]/div/div/div/shared-autocomplete[3]/mat-form-field/div/div[1]/div[1]/input", null, "Madrid city centre");
      cy.getPath("Siguiente", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/div/div/button[2]").click();

      cy.getPath("Domiciliación bancaria", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[4]/div/shared-pago-view/div/div/mat-tab-group/div/mat-tab-body/div/div/susc-metodo-pago/mat-card/div/shared-tipo-de-cobro/div/div[1]/div/div/div[1]/div/mat-button-toggle-group/mat-button-toggle[1]/button").click();      
      cy.getPath("IBAN", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[4]/div/shared-pago-view/div/div/mat-tab-group/div/mat-tab-body/div/div/susc-metodo-pago/mat-card/div/shared-tipo-de-cobro/div/div[1]/div/div/div[2]/shared-selector-tipo-de-cobro/div/div/div[3]/shared-input/mat-form-field/div/div[1]/div/input[1]").type("ES9320380596813489473847", {force: true}).blur();

      cy.getPath("Siguiente", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/div/div/button[2]").click();

      cy.getPath("Limpiar Localidad", "//html/body/div[2]/div[7]/div/mat-dialog-container/dlg-generar-mandato/div/div[1]/div/div/div[2]/div[4]/shared-input[1]/mat-form-field/div/div[1]/div/input").clear();
      cy.getPath("Localidad: 'Madrid", "//html/body/div[2]/div[7]/div/mat-dialog-container/dlg-generar-mandato/div/div[1]/div/div/div[2]/div[4]/shared-input[1]/mat-form-field/div/div[1]/div/input").type("Madrid");
      cy.getPath("Aceptar", "//html/body/div[2]/div[7]/div/mat-dialog-container/dlg-generar-mandato/div/div[2]/button[2]").click();

      cy.get('body').then($body => {
        if ($body.find(':contains("Se ha generado correctamente el siguiente mandato")'))
        {
          cy.getPath("Aceptar", "//html/body/div[2]/div[7]/div/mat-dialog-container/dlg-shared-info/div[2]/button").click();    
        }
      });
      
      cy.getPath("Siguiente", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/div/div/button[2]").click();

      cy.comboSelect("Seleccionar 'Call center'", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[5]/div/susc-datos-comerciales-view/div/mat-card[1]/div/div[2]/shared-autocomplete[2]/mat-form-field/div/div[1]/div[1]/input", null, "Call center");
      cy.comboSelect("Seleccionar 'Call Center'", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/mat-horizontal-stepper/div[2]/div[5]/div/susc-datos-comerciales-view/div/mat-card[1]/div/div[2]/shared-autocomplete[3]/mat-form-field/div/div[1]/div[1]/input", null, "Call Center");
      cy.getPath("Siguiente", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/div/div/button[2]").click();
      cy.getPath("Guardar", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-nueva-suscripcion/mat-drawer-container/mat-drawer-content/div/div[2]/div/div/button[2]").click();

      cy.wait(20000);
      cy.xpath("//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/div/div[1]/div/div[2]/span")
      .invoke('text')
      .then ( text =>
      {
        cy.log(text);
        console.log(text);
        cy.getPath("Usuarios", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/div/div[3]/div[2]/button").click();
        cy.getPath("Editar cliente", "//html/body/div[2]/div[8]/div/div/div/button[1]").click();
        cy.getPath("Grupos facturacion", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-panel-suscriptor/mat-drawer-container/mat-drawer/div/gestion-cliente/div/div[2]/div[1]/div/mat-expansion-panel/div/div/div[3]/div").click();
        cy.getPath("INVOICE", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-panel-suscriptor/mat-drawer-container/mat-drawer/div/gestion-cliente/div/div[2]/div[3]/div/div[2]/div[3]/div/grupos-facturacion/div/mat-card/div/div/shared-column-sel/div/div/div[1]/div[2]/div/mat-expansion-panel[7]/mat-expansion-panel-header/span[1]/div/div/span[1]").click();
        cy.getPath("Monthly", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-panel-suscriptor/mat-drawer-container/mat-drawer/div/gestion-cliente/div/div[2]/div[3]/div/div[2]/div[3]/div/grupos-facturacion/div/mat-card/div/div/shared-column-sel/div/div/div[1]/div[2]/div/mat-expansion-panel[7]/div/div/div[2]/mat-checkbox/label/span[2]/span[2]").click();
        cy.getPath("Guardar", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-panel-suscriptor/mat-drawer-container/mat-drawer/div/gestion-cliente/div/div[1]/div/div[3]/button").click();

        // cy.getPath("Editar Cliente", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/div/div[3]/div[2]/button


        /* cy.abrirMenuSuscripciones();
        cy.getPath("Abrir Gestión Financiera", "//html/body/div[2]/div[8]/div/div/div/button[3]").click();
        cy.getPath("Abrir Gestión Facturación", "//html/body/div[2]/div[9]/div/div/div/button[2]").click(); */
        //2014518

        cy.wait(5000);
        cy.abrirMenuSuscripciones();
        cy.wait(400);
        
        cy.getContains("Abrir Gestión Financiera", "Gestión financiera").click();      
        cy.getContains("Abrir Gestión Facturación", "Gestión de facturación").click();
        // cy.wait(5000);      
        cy.comboSelect("Compañia de facturación", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-facturacion/div/div[2]/mat-drawer-container/mat-drawer-content/div/div/mat-card[1]/shared-autocomplete[2]",null, "Protec press");      
        cy.comboSelect("Compañia de facturación", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-facturacion/div/div[2]/mat-drawer-container/mat-drawer-content/div/div/mat-card[1]/shared-autocomplete[3]",null, "Spain daily montly subscription");                                                                                                                                                                                                                                                             
        cy.comboSelect("Compañia de facturación", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-facturacion/div/div[2]/mat-drawer-container/mat-drawer-content/div/div/mat-card[1]/shared-autocomplete[4]",null, "Prueba");
        cy.getPath("Cliente", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-facturacion/div/div[2]/mat-drawer-container/mat-drawer-content/div/div/mat-card[2]/shared-cod-desc/div/div/shared-input/mat-form-field/div/div[1]/div[1]/input").type(text.trim());
        cy.getPath("Cliente", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-facturacion/div/div[2]/mat-drawer-container/mat-drawer-content/div/div/mat-card[2]/shared-cod-desc/div/div/shared-input/mat-form-field/div/div[1]/div[1]/input").blur();
        cy.getPath("Seleccionar rango paso 1", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-facturacion/div/div[2]/mat-drawer-container/mat-drawer-content/div/div/mat-card[2]/range-datepicker").then( element =>
        {
          element.find("button").click();
        });

        let idCli = text.trim();

        cy.getPath("Seleccionar rango paso 2", "//sat-datepicker-content/sat-calendar/div/div/div/mat-form-field[1]/div/div[1]/div/input").clear();
        cy.getPath("Seleccionar rango paso 3", "//sat-datepicker-content/sat-calendar/div/div/div/mat-form-field[1]/div/div[1]/div/input").type("01/01/1900");
        cy.getPath("Seleccionar rango paso 4", "//div/sat-datepicker-content/sat-calendar/div/div/div/mat-form-field[1]/div/div[1]/div/input").blur();

        cy.getPath("Seleccionar rango paso 5", "//sat-datepicker-content/sat-calendar/div/div/div/mat-form-field[2]/div/div[1]/div/input").clear();
        cy.getPath("Seleccionar rango paso 6", "//sat-datepicker-content/sat-calendar/div/div/div/mat-form-field[2]/div/div[1]/div/input").type("30/10/2023");
        cy.getPath("Seleccionar rango paso 7", "//sat-datepicker-content/sat-calendar/div/div/div/mat-form-field[2]/div/div[1]/div/input").blur();

        cy.getContains("Seleccionar rango paso 9", "APLICAR").click();
        cy.getPath("Mostrar Facturas a Facturar", "//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/gestion-facturacion/div/div[1]/div[2]/button[2]").click();
        cy.wait(400);
        cy.getContains("Procesar", "PROCESAR").click();
        cy.getContains("Cerrar Resumen", "CERRAR").click();


        cy.abrirMenuSuscripciones();
        cy.abrirGestionFinanciera();
        cy.abrirConsultaFacturacion();

        cy.getPath("Buscar Factura", "//consulta-facturacion/div/div[2]/mat-drawer-container/mat-drawer/div/div/div[2]/div[1]/shared-cod-desc/div/div/shared-input/mat-form-field/div/div[1]/div[1]/input").type(idCli).blur();
        
        //--// cy.getPath("Seleccionar rango paso 2", "//sat-datepicker-content/sat-calendar/div/div/div/mat-form-field[1]/div/div[1]/div/input").clear();
        //--// cy.getPath("Seleccionar rango paso 3", "//sat-datepicker-content/sat-calendar/div/div/div/mat-form-field[1]/div/div[1]/div/input").type("01/01/1900");
        //--// cy.getPath("Seleccionar rango paso 4", "//div/sat-datepicker-content/sat-calendar/div/div/div/mat-form-field[1]/div/div[1]/div/input").blur();

        //--// cy.getPath("Seleccionar rango paso 5", "//sat-datepicker-content/sat-calendar/div/div/div/mat-form-field[2]/div/div[1]/div/input").clear();
        //--// cy.getPath("Seleccionar rango paso 6", "//sat-datepicker-content/sat-calendar/div/div/div/mat-form-field[2]/div/div[1]/div/input").type("30/10/2023");
        //--// cy.getPath("Seleccionar rango paso 7", "//sat-datepicker-content/sat-calendar/div/div/div/mat-form-field[2]/div/div[1]/div/input").blur();
        
        cy.getPath("Buscar", "//consulta-facturacion/div/div[2]/mat-drawer-container/mat-drawer/div/div/div[3]/button[2]").click();

        cy.get("mat-icon[svgicon='more_vert']").click();

        cy.get(".mat-menu-content").contains("Confirmar").click();
        cy.get('body').then($body => {
          // If the element doesn't exist, exit the callback
          if ($body.find(':contains("Resumen de resultados")'))
          {
            cy.getPath("Cerrar Alerta", "//mat-dialog-container/shared-dlg-errores/div/div[4]/button").click();
          }
        });
        
        cy.wait(12000);
        cy.getPath("Cambiar", "//html/body/app-root/susc-page/div/mat-toolbar/mat-toolbar-row/sh-button-views/div/button").click();

        cy.get(".panel-views-menu").then ( element => {
          // element.getPath("Recientes", "//html/body/div[2]/div[7]/div/div/div/div[3]/mat-tab-group/mat-tab-header/div[2]/div/div/div[2]/div[1]/span").click();
          element.find(':contains("RECIENTES")').click();
          cy.debug();
          element.find(':contains("Consulta de la suscripción")').parent().click();
          cy.wait(12000);
          // cy.getPath("Editar suscripciones","//html/body/app-root/susc-page/div/mat-sidenav-container/mat-sidenav-content/div/panel-control/div/div[2]/mat-drawer-container/mat-drawer-content/shared-panel-suscriptor/mat-drawer-container/mat-drawer-content/div/mat-tab-group/mat-tab-header/div[2]/div/div/div[2]/div[1]/div").click({forced: true});
        });

      });

      

      cy.log("FIN");      
      cy.allure().step("fin");
    });
  });
});