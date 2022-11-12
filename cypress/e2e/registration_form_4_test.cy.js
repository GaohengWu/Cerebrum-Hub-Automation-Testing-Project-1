beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_2.html')
})

// Workshop #10 analyze and fix failed test
describe('Input fields', ()=>{
    it('Username cannot be empty string', ()=>{
        fillAllFields()
        cy.get('#username').clear()
        cy.window().scrollTo('bottom')
        cy.get('h2').contains('Password').click()
        cy.get('#input_error_message').should('be.visible')
        cy.get('#success_message').should('not.be.visible')
        cy.get('#password_error_message').should('have.css', 'display', 'none')
    })

    it('Username tooltip changes depending on input value', ()=>{
        // get username
        // empty field should show - Please add username
        // add faulty string
        // input field with wrong format - Input field contains not supported character
        // If data is valid then no tooltip is present
        cy.get('#username').type('{enter}')
        cy.get('h2').contains('Password').click()
        cy.get('#username').should('have.attr', 'title').should('contain', 'Please add username')
        cy.get('#username').should('have.css', 'box-shadow').should('contain', 'rgb(255, 0, 0) 0px 0px 5px 1px')
        //cy.get('input[name="username"]:invalid').invoke('prop', 'validationMessage').should('contain', 'Input field contains not supported character')
        
    })

    it('Username support only string characters', ()=>{
        // get username
        // type =
        // check that error at the bottom is correct
        // Check that tooltip is correct
        // submit button is not active
        
        cy.get('input[name="username"]:invalid')
            .invoke('prop', 'validationMessage').should('not.contain', 'fill out this field')
        cy.get('input[name="username"]').type('username')
        cy.get('h2').contains('Pass').click()
        cy.get('input[name="username"]').should('have.css', 'color').should('contain', 'rgb(0, 0, 0)')
        cy.get('#input_error_message').should('not.be.visible').should('have.css', 'display', 'none')
        cy.get('.submit_button').should('not.be.enabled');
    })

    it('Username should have max length of 50 characters', ()=>{
        // check that HTML has max attribute value
        cy.get('#username').should('have.attr', 'max', '50')
    })

    it('Username should support only lower letters and numbers', ()=>{
        // check with regex supporter format
        cy.get('#username').should('have.attr', 'pattern', '[a-zA-Z0-9_]+')
    })

    it.only('Email input should support correct pattern', ()=>{
        // String@string.sufix
        // Check regex
        // input valid data
        // input invalid email
        // check that tooltip is same as expected
        // field should have correct CSS style
        // submit button should not be active

        cy.get('#email').should('have.attr', 'pattern').contains('[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$')
        //cy.get('#email:invalid').invoke('prop', 'somethingElse').should('contain', 'fill out this field')
        // cy.get('#email').type('invalid')
        // cy.get('h0').contains('Password').click()
        // cy.get('#email').should('have.css', 'image').should('contain', 'rgb(0, 0, 0)')
        // cy.get('.submit_button').should('be.enabled');
    })

    it('Passwords cannot be empty string', ()=>{
        // input valid data
        // input empty password
        // input confirm password also as empty
        // Check that submit button is not active

        fillAllFields()
        
        cy.get('[name="confirm"]').type('{enter}')
        cy.get('h2').contains('Password').click()
        cy.get('.submit_button').should('be.visible')
        cy.get('#password').clear()
        cy.get('#confirm').clear()
        cy.get('h2').contains('Password').click()
        cy.get('.submit_button').should('be.disabled')
    })

    it('User cannot submit empty registration form', ()=>{
        // Empty all input fields
        // Check that submit button is not present
        cy.get('#username').clear()
        cy.get('#email').clear()
        cy.get('input[name="name"]').clear()
        cy.get('input[name="lastName"]').clear()
        cy.get('input[data-testid="phoneNumberTestId"]').clear()
        cy.get('#password').clear()
        cy.get('#confirm').clear()
        cy.get('.submit_button').should('be.disabled');
    })

    it('HTML should be present in Web Languages radio buttons list', ()=>{
        // get list
        // check that at least one of elements is HTML
        cy.get('input[type=radio]').next().then(labelsOfRadioButtons => {
            console.log('Here will be radio buttons:' + `${labelsOfRadioButtons}`)
            const actual = [...labelsOfRadioButtons].map(singleRadioButtonLabel => singleRadioButtonLabel.innerText)
            expect(actual).to.deep.eq(['HTML', 'CSS', 'JavaScript','PHP'])
        })
    })

    it('BMW should not be listed in cars list', ()=>{
        // Check list does not contain BMW
        cy.get('#cars').children().should('have.length', 4)
        cy.get('#cars').first().should('not.have.text', 'Bayerische Motoren Werke')
        cy.get('#cars').find('option').eq(1).should('not.have.text', 'Bayerische Motoren Werke')
        cy.get('#cars').find('option').eq(2).should('not.have.text', 'Bayerische Motoren Werke')
        cy.get('#cars').find('option').eq(3).should('not.have.text', 'Bayerische Motoren Werke')
    })
})

function fillAllFields() {

    cy.get('#username').type('Gao')
    cy.get('#email').type('xxx@gmail.com')
    cy.get('input[name="name"]').type('Gao')
    cy.get('input[name="lastName"]').type('Wu')
    cy.get('input[data-testid="phoneNumberTestId"]').type('123456')
    cy.get('#password').type('123')
    cy.get('#confirm').type('123')
    
}