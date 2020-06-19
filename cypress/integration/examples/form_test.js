describe('Inputs and Submit button', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })
    it('can type a text for a new name', () => {
        cy.get('input[name=name]')
          .type('Danny Dan')
          .should('have.value', 'Danny Dan')
    })
      it('can type a text for a special insturctions', () => {
        cy.get('input[name=special]')
          .type('make with extra love')
          .should('have.value', 'make with extra love')
      })
        it('can check boxes', () => {
          cy.get('[type="checkbox"]')
            .check()
            .should('be.checked')
        })
        it('the submit button should be able to submit data', () => {
        cy.get('button')
          .should('not.be.disabled')
    })
})