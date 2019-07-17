describe('Forgotten Password', ()=>{
    before(()=>{
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should('include', 'index.html')
    })

    it('should display login form', ()=>{
        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
    })

    it('should display forgotten password form', ()=>{
        cy.contains('Forgot your password').click()
        cy.get('#send_password_form').should('be.visible')
        cy.url().should('include', 'forgot-password.html')
    })

    it('should submit forgotten password form',()=>{
        cy.get('#user_email').type('Nacheaux@cat.com')
        cy.contains('Send Password').click()
    })

    it('should display success message', ()=>{
        cy.get('h3').contains('Forgotten Password')
        cy.url().should('include','forgotten-password-send.html')
    })
})