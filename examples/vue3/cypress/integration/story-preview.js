/// <reference types="cypress" />

describe('Story preview', () => {
  const getIframeDocument = () => {
    return cy.get('iframe[data-test-id="preview-iframe"]')
      .its('0.contentDocument').should('exist')
  }

  const getIframeBody = () => {
    return getIframeDocument()
      .its('body').should('not.be.undefined')
      .then(cy.wrap)
  }

  it('should display the story variants', () => {
    cy.visit('/')
    cy.get('[data-test-id="story-list-item"]').contains('Demo').click()
    cy.get('[data-test-id="story-variant-list-item"]').should('have.length', 2)
    cy.get('[data-test-id="story-variant-list-item"]').contains('untitled').click()
    cy.get('[data-test-id="story-variant-single-view"]').contains('untitled')
    getIframeBody().contains('Hello world!')
    cy.get('[data-test-id="story-source-code"]').contains('<Demo message="Hello world!" />')
    cy.get('[data-test-id="story-variant-list-item"]').contains('Variant 2').click()
    cy.get('[data-test-id="story-variant-single-view"]').contains('Variant 2')
    getIframeBody().contains('Meow!')
    cy.get('[data-test-id="story-source-code"]').contains('<Demo message="Meow!" />')
  })
})
