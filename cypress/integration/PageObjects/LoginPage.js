// /// <reference types="Cypress"/>
 
// class LoginPage
// {
//     visit()
//     {
//         cy.visit('https://app.socialpie.io:7804/session/signin')
//     }
//     username(value)
//     {
//         const username = cy.get('[id=username]')
//         username.clear()
//         username.type(value)
//         return this
//     }
//     password(value)
//     {
//         const password = cy.get('[id=password]')
//         password.clear()
//         password.type(value)
//         return this
//     }
//     submit()
//     {
//         const btn = cy.get('[type="submit"]')
//         btn.click()
//     }
// }
// export default LoginPage