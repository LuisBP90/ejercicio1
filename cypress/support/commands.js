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
Cypress.Commands.add('login', () => { 
    cy.visit('/', {failOnStatusCode: false})
    cy.fixture('credenciales').then((data) => {
        cy.get('#user-name').type(data.username)
        cy.get('#password').type(data.password)
    })
    cy.get('#login-button').click()
 })
//
//
// -- This is a child command --
Cypress.Commands.add('agregarProductosCarrito', () => { 
    cy.fixture("listaProductos").then((data)=>{
        console.log(data.productos)
        data.productos.forEach((producto) => {
            cy.contains(producto).parent().parent().parent().find('button').click()            
        });
    })
 })
Cypress.Commands.add('carrito', () => { 
    cy.get('#shopping_cart_container').click()
 })
Cypress.Commands.add('checkout', () => { 
    cy.get('#checkout').click()
    cy.fixture("formulario").then((data)=>{
        cy.get('#first-name').type(data.firstName)
        cy.get('#last-name').type(data.lastName)
        cy.get('#postal-code').type(data.postalCode)
    })
    cy.get('#continue').click()
 })
Cypress.Commands.add('validarCompra', () => { 
    cy.get('#finish').click()
    cy.contains('Thank you for your order!')
 })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })