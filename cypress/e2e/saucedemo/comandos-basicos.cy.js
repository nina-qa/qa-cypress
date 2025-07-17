describe('🔧 Laboratório de Comandos Cypress - Saucedemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('01 - cy.get, cy.type, cy.click, cy.should', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('02 - cy.wait e cy.log', () => {
    cy.log('Esperando 1 segundos antes de interagir...');
    cy.wait(1000);
    cy.get('[data-test="username"]').type('usuario_teste');
  });

  it('03 - cy.focus e cy.blur', () => {
    cy.get('[data-test="username"]').focus().should('have.focus');
    cy.wait(500);
    cy.get('[data-test="username"]').blur();
  });

  it('04 - cy.wrap e .should', () => {
    const produto = 'Produto Genérico';
    cy.wrap(produto).should('include', 'Produto');
  });

  it('05 - .as() e uso com get', () => {
    cy.get('[data-test="username"]').as('campoUsuario');
    cy.get('@campoUsuario').type('com_alias');
  });

  it('06 - cy.pause', () => {
    cy.pause(); // Interrompe o teste no modo interativo
    cy.get('[data-test="username"]').type('pausado');
  });

  it('07 - timeout como opção', () => {
    cy.get('[data-test="login-button"]', { timeout: 10000 }).should('be.visible');
  });
});
