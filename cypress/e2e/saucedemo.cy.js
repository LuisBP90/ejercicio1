/// <reference types="cypress" />

describe('Compra en saucedemo',() => {
   
  before('Navegar al sitio saucedemo y autenticarse',()=>{
    cy.login()
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  it('Comprar varios articulos', () => {
    cy.agregarProductosCarrito()
    cy.carrito()
    cy.checkout()
    cy.validarCompra()
  });
})