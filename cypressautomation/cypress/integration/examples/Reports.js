/// <reference types="Cypress" />
import LoginPage from '../../support/ObjectPages/LoginPage'
import ReportPage from '../../support/ObjectPages/ReportPage'
describe('My First Testsuite',function()
{
    before(function() {
        // runs once before all tests in the block
        cy.fixture("example").then(function(data){ //then to resolve promise
         this.data=data
        })
      })
    it('Reports',function()
    {
     

        const login = new LoginPage()
        const report =new ReportPage()
        cy.visit(this.data.urladmin)
       //cy.log('url from global env')
       //cy.visit(Cypress.env('adminurl'))
        login.getUserName().type(this.data.Username)
        login.getPass().type(this.data.Pass)
        login.getSubmit().click()
        report.getReportMenu().click()
        report.getCreate().click({multiple:true,force:true})
        cy.wait(4000)
      // Cypress.config('defaultCommandTimeout','5000')

        report.getSearchEnter().type(this.data.SearchValue)
        report.getReportNameClick().each(($e1,index,$list) =>{
           if($e1.text() === this.data.ReportName)
           {
               $e1.click()
           }
        }) 
        report.getDate().type(this.data.Datevalue)
        login.getSubmit().click({force:true})
        report.getAlert().should('have.text',this.data.SuccessMSG)
        /*cy.get('.alert > div > .ng-binding').then(function($message){
         
            const val=$message.text()
            cy.log(val)
        }) */
      /*  cy.on("window:alert",(strg) =>
       {
           //Mocha
           expect(strg).to.equal("The number of opened tabs exceeds maximum limits Please... Close some of the tabs visited")
       }) */
       //ITTERATION IN JAVA SCRIPT
       /*
       array.Foreach(function(element){
          cy.selectProduct(element)
       })
       //Cypress customisze Data

       this.data.ProdcuctName.Foreach(function(element){
          cy.selectProduct(element)
       })
       */
      
    })
})