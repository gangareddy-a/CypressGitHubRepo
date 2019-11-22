class LoginPage
{
getUserName()
{
    return cy.get('#mfs-login-id')
}
 getPass(){
     return cy.get('#mfs-login-password')
 }
 getSubmit()
 {
     return cy.get("button[type='submit']")
 }
}
export default LoginPage //if we declare this it will avaliable to import we have to import to apply this because they are not cypress methods
