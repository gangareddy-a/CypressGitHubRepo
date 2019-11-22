class ReportPage
{
    getReportMenu()
    {
        return cy.get('li#Reports')
    }
    getCreate()
    {
        return  cy.get("button[aria-label='Create']")
    }
    getSearchEnter()
    {
        return cy.get("input[name='reportName']")
    }
    getReportNameClick()
    {
        return cy.get('.ng-scope md-autocomplete-parent-scope span')
    }
    getDate()
    {
        return cy.get('#input_2')
    }
    getAlert()
    {
        return cy.get('.alert > div > .ng-binding')
    }
}

export default ReportPage