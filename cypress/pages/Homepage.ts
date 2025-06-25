


export class HomePage {
  visit() {
     cy.visit('https://staging--katsu-web.netlify.app')
  }

  getTitle() {
    return cy.get('title') // Replace 'title' with the actual CSS selector if needed
  }
}
