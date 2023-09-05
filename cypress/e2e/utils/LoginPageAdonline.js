
class LoginPageAdonline {
  /* constructor()
  {
    cy.log('iniciar Login');
  }   */
  elements = {
    usernameInput: () => cy.get("#mat-input-0"),
    passwordInput: () => cy.get("#mat-input-1"),
    loginBtn: () => cy.get(".btConectar"),
    errorMessageOld: () => cy.xpath('/html/body/div[2]/div[2]/div/mat-dialog-container/alert/div/mat-card/mat-card-content/div/div/p'),
    errorMessage: () => cy.get('.btConectar').click(),
    sessionKey: '',
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    cy.intercept('*Initialize*').as('getSettings')    
    this.elements.loginBtn().click();
    cy.wait('@getSettings').then( (interception) => {
    cy.log(interception.response.body.Connect.SessionKey);
    /* this.elements.sessionKey = interception.response.body.Connect.SessionKey;
    cy.log(this.elements.sessionKey);
      for (const property in interception.response) {
        // cy.log(property);
      }*/
    });
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);    
    cy.intercept('*Initialize*').as('getSettings');
    this.elements.loginBtn().click();
    cy.wait('@getSettings').then( (interception) => {
      cy.log(interception.response.body.Datos.id);
      console.log(interception);
      //cy.screenshot();
      this.elements.sessionKey = interception.response.body.Datos.id;
      cy.log("Haciendo Loggin");
      cy.log("Esta es la sessionKey capturada:'" + this.elements.sessionKey + "'");
    });
  }
  
  get sessionKey()
  {
    return this.elements.sessionKey;
  }
}

export const loginPageAdonline = new LoginPageAdonline();
