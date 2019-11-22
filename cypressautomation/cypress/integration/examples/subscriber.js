/// <reference types="Cypress" />
describe('My First Testsuite',function()
{
    it('quickRegistration',function()
    {
        cy.visit("http://albuatweb-278287743.ap-southeast-1.elb.amazonaws.com/web/vpdirect/login.do")
        cy.get('#mfs-login-id').type('masteradm12')
        cy.get('#mfs-login-password').type('mFino@9999')
        //cy.wait(2000)
        cy.get("button[type='submit']").click()
        cy.wait(3000)
        cy.get('span.ng-binding.ng-scope').as('bcl')
        cy.get('@bcl').contains('Operations').click()
       /* cy.get('@bcl').each(($e1,index,$list) =>{
            const val=$e1.text()
            if(val.includes('Inquiry'))
            {
                $e1.click()
            }
            //console.log('end') 
//cy.wait(2000)
          //  cy.get('.open > [style="display: block;"] > :nth-child(1) > :nth-child(1)').click({ multiple: true, force: true })   
      //  })*/
      cy.get('@bcl').contains('Persona Management').click({multiple:true,force:true})
      cy.get('@bcl').contains('Subscribers').click({multiple:true,force:true})
      cy.get("button[aria-label='Create']").click({multiple:true,force:true})
      cy.get("md-radio-button[aria-label='Retail Subscriber']").click({multiple:true,force:true})
      //cy.get("md-radio-button[aria-label='Retail Subscriber']").check().should('be.checked')
      cy.get("md-radio-button[aria-label='Quick Registration']").click({multiple:true,force:true})
      cy.get("input[name='firstName']").type('ganga')
      cy.get("input[name='lastName']").type('ganga')
      //cy.get('md-select').select('Male').should('have.value','Male')
      cy.get("md-select[name='gender']").click({multiple:true,force:true})
      cy.wait(1000)
      cy.get("md-option[value='Male']").click({multiple:true,force:true})
      cy.wait(1000)
      cy.get("input[name='mobileNo']").type('0932133538')
      cy.get("input[name='emailId']").type('wer@gmail.com.vn')
      cy.get("button[aria-label='Submit']").click({multiple:true,force:true})

      
    })
})