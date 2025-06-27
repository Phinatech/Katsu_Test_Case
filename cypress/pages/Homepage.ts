


export class HomePage {
  visit() {
     cy.visit('https://staging--katsu-web.netlify.app')
  }

  getTitle() {
    return cy.get('title') 
  }
}
