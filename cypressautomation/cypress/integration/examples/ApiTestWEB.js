/// <reference types="cypress" />
import Loginpage from '../../support/ObjectPages/LoginPage'
import ReportPage from '../../support/ObjectPages/ReportPage'
describe('ApiTest',function() {
before(function(){
    cy.fixture("example").then(function(data){
        this.data=data
    })
})

it('MyFirstApiTest',function()
{
  const login = new Loginpage()  
  const report = new ReportPage()

cy.visit(Cypress.env('adminurl'))

login.getUserName().type(this.data.Username)
login.getPass().type(this.data.Pass)
login.getSubmit().click()
cy.server()
cy.route('GET','/reportservice/read.do').as('getReportsdata')
report.getReportMenu().click()
cy.wait('@getReportsdata')

})
})