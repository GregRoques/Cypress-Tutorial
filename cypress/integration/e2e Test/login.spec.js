describe('Login Test', ()=>{
    before(()=>{
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should('include', 'index.html')
    })
    it('should display login form', ()=>{
        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
    })

    it('should login to application', ()=>{
       cy.loginToApp('LilNacheaux@cat.com','Meow123') //hook from ../support/commands
    })

    it('should display error message', ()=>{
        cy.get('.alert-error').as('Error_Message')
        cy.get('@Error_Message').should('be.visible')
    })
})