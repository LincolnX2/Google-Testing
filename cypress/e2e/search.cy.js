describe('template spec', () => {
    it('passes', () => {
      cy.visit('/')

      
cy.get('#APjFqb').type('Andre')
cy.contains('Andrey Santos').click()
cy.get('.Maj6Tc > .REySof').click()

// scroll the button into view, as if the user had scrolled

cy.get('#center_col').scrollIntoView()
  .should('be.visible')

    })
  })
