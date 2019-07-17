describe('Action Test', ()=>{
    before(()=>{
        //runs once before all tests in the block
    })
    after(()=>{
        //runs once after all tests in the block
    })

    beforeEach(()=>{
        //runs after each test in the block
        cy.visit('https://devexpress.github.io/testcafe/example/')
    })

    afterEach(()=>{
        //runs after each test in the block
    })

    it('submit developer name', ()=>{
        // cy.get('#developer-name').type('Name')
        // cy.get("#submit-button").scrollIntoView()
        // cy.get('#submit-button').click()

        // Doing same thing as above with Custom Commands
        // ../support/commands
        cy.submitDeveloper('Callie & Midnight')

        cy.get('.result-content').should('be.visible')
        cy.url().should('include', 'thank-you')
    })

    it('should enable slider', ()=>{
        cy.get('#slider').as('Slider') //the Alias

        cy.get('@Slider').should('have.class','ui-state-disabled')
        cy.get('#tried-test-cafe').click()
        cy.get('@Slider').should('not.have.class','ui-state-disabled')
    })

    it('should have empty value by default', ()=>{
        cy.get('#comments').as('Textarea')

        cy.get('#tried-test-cafe').click()
        cy.get('@Textarea').should('have.value', '')
        cy.get('@Textarea').type('I love cats!')
        cy.get('@Textarea').should('have.value', 'I love cats!')  
    })
})