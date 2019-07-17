describe('Visual Regression Test',()=>{
    before(()=>{
        cy.visit("https://example.com")
    })

    it('should load homepage',()=>{
        cy.url().should('include', 'example.com')
    })

    it('should make page snapshot', ()=>{
        cy.matchImageSnapshot()
    })
})