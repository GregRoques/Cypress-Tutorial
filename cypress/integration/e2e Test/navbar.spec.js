describe('Navbar Test', ()=>{
    before(()=>{
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should('include', 'index.html')
    })

    it('should display online banking content',()=>{
        cy.get('#onlineBankingMenu').as('linkOnlineBanking')

        cy.get('@linkOnlineBanking').click()

        cy.get('h1').as('Title')
        cy.get('@Title').contains('Online Banking')

        cy.get('#online_banking_features').should('be.visible')
    })

    it('should display feedback content',()=>{
        cy.get('#feedback').as('linkFeedback')

        cy.get('@linkFeedback').click()
        cy.get('#feedback-title').should('be.visible')
    })

    it('should navigate back to homepage via logo', ()=>{
        cy.get('.brand').as('logo')

        cy.get('@logo').click()
        cy.url().should('include', 'index.html')
    })
})