describe('Searchbox Test', ()=>{
    before(()=>{
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should('include', 'index.html')
    })

    it('should search for value via searchbox', ()=>{
        cy.get('#searchTerm').as('Searchbox')

        cy.get('@Searchbox').type('cat {enter}')
        cy.url().should('include', 'search.html?searchTerm=')
    })    

    it('should display search results page',()=>{
        cy.get('h2').as('Title')

        cy.get('@Title').contains('Search Results')
    })

    it('should display homepage again', ()=>{
        cy.go('back')
        cy.url().should('include', 'index.html')
    })
})