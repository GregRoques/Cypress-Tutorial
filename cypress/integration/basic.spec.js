describe('my first cypress test', ()=>{
    it('should load example web page', ()=>{
       
        cy.visit('/')  //does page load

        cy.url().should('include', 'example.com/') //check url
        cy.title().should('eq', "Example Domain") //check page title

        // cy.wait(3000) // static wait... not a best practice
        // cy.pause() //much better than wait...similar to Google DevTools

        // cy.get('h1').contains('Example Domain')  //Check for visibility
        // Using Aliases:    
        cy.get('h1').as('title')
        cy.get('@title').contains('Example Domain')
        cy.get('@title').should('be.visible')
    })

    it('should load another superdomain', ()=>{
        cy.visit('https://www.dev.to')
    })
})