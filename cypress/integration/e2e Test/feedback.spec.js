describe('Feedback Test', ()=>{
    before(()=>{
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should('include', 'index.html')
    })

    it('should display feedback form', ()=>{
        cy.get('#feedback').as('linkFeedback')

        cy.get('@linkFeedback').click()
        cy.get('#feedback-title').should('be.visible')
        cy.get('form').should('be.visible')
    })

    it('should submit feedback form', ()=>{
        cy.get('#name').as('inputName')
        cy.get('#email').as('inputEmail')
        cy.get('#subject').as('inputSubject')
        cy.get('#comment').as('inputComment')
        cy.get('.btn-signin').as('submitButton')

        cy.get('@inputName').type('Nacheaux')
        cy.get('@inputEmail').type('Nacheaux@cat.com')
        cy.get('@inputSubject').type('Meow')
        cy.get('@inputComment').type('Feed me!')
        // cy.get('@submitButton').click()
        cy.contains('Send Message').click() //this also works to click button; actually container text
    })

    it('should display success message', ()=>{
        cy.get('#feedback-title').should('be.visible')
    })
})