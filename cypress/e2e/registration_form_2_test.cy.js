beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_2.html')
})

// Workshop #6 create following tests:

describe('Section 1: Functional tests', () => {
    it('User can submit form with valid data and only mandatory fields added', ()=>{
        // Add test steps for filling in ONLY mandatory fields
        cy.get('[data-testid="user"]').type('Something')
        cy.get('#email').type('xxx@gmail.com')
        cy.get('[data-cy="name"]').type('Gaoheng')
        cy.get('[data-testid="lastNameTestId"]').type('Wu')
        cy.get('[data-testid="phoneNumberTestId"]').type('123456')
        cy.get('#password').type('MyPass')
        cy.get('#confirm').type('MyPass{enter}')     

        // Assert that submit button is enabled
        cy.get('button.submit_button').should('be.enabled')
        cy.get('button.submit_button').click()

        // Assert that after submitting the form system show successful message
        cy.get('#success_message').should('be.visible')
        cy.get('#success_message').should('have.css', 'display', 'block')       
        
    })

    it('User can submit form with all fields added', ()=>{
        // Add test steps for filling in ALL fields
        cy.get('[data-testid="user"]').type('Something')
        cy.get('#email').type('xxx@gmail.com')
        cy.get('[data-cy="name"]').type('Gaoheng')
        cy.get('[data-testid="lastNameTestId"]').type('Wu')
        cy.get('[data-testid="phoneNumberTestId"]').type('123456')
        cy.get('#javascriptFavLanguage').click()
        cy.get('#vehicle2').click()
        cy.get('#cars').select('Audi')
        cy.get('#animal').select('Dog')
        cy.get('#password').type('MyPass')
        cy.get('#confirm').type('MyPass{enter}')

        // Assert that submit button is enabled
        cy.get('button.submit_button').should('be.enabled')
        cy.get('button.submit_button').click()

        // Assert that after submitting the form system show successful message
        cy.get('#success_message').should('be.visible')
        cy.get('#success_message').should('have.css', 'display', 'block')
    })

    it('User can use only same both first and validation passwords', ()=>{
        // Add test steps for filling in only mandatory fields
        cy.get('[data-testid="user"]').type('Something')
        cy.get('#email').type('xxx@gmail.com')
        cy.get('[data-cy="name"]').type('Gaoheng')
        cy.get('[data-testid="lastNameTestId"]').type('Wu')
        cy.get('[data-testid="phoneNumberTestId"]').type('123456')
        cy.get('#password').type('MyPass')

        // Type confirmation password which is different from first password
        cy.get('#confirm').type('MyPass123{enter}')

        // Assert that submit button is not enabled
        cy.get('button.submit_button').should('be.disabled')

        // Assert that successful message is not visible
        cy.get('#success_message').should('not.be.visible')
        cy.get('#success_message').should('have.css', 'display', 'none')

        // Assert that error message is visible
        cy.get('#password_error_message').should('be.visible')
        cy.get('#password_error_message').should('have.css', 'display', 'block')
    })

    it('Check that submit button cannot be selected if username is empty', () => {

        // Submit button by default is disabled and cannot be clicked
        cy.get('button[class="submit_button"]').should('be.disabled')

        // use function in order to fill the form with correct data
        //inputValidData() this will fill all predefined information to the fields
        cy.get('#email').type('xxx@gmail.com')
        cy.get('[data-cy="name"]').type('Gaoheng')
        cy.get('[data-testid="lastNameTestId"]').type('Wu')
        cy.get('[data-testid="phoneNumberTestId"]').type('123456')
        cy.get('#javascriptFavLanguage').click()
        cy.get('#vehicle2').click()
        cy.get('#cars').select('Audi')
        cy.get('#animal').select('Dog')
        cy.get('#password').type('MyPass')
        cy.get('#confirm').type('MyPass{enter}')

        // Add steps for emptying username input field
        cy.get('[data-testid="user"]').should('be.empty')

        // Assert that submit button is still disabled
        cy.get('button[class="submit_button"]').should('be.disabled')
    })

    //Add more similar tests for checking other mandatory field's absence

    it('Check that the submit button cannot be selected if email is empty', () => {
        //Submit button by default is disabled and cannot be clicked
        cy.get(".submit_button").should('be.disabled')

        //Fill all mandatory fields except for the email
        cy.get('[data-testid="user"]').type('something')
        cy.get('[data-cy="name"]').type('Gaoheng')
        cy.get('[data-testid="lastNameTestId"]').type('Wu')
        cy.get('[data-testid="phoneNumberTestId"]').type('123456')
        cy.get('#cars').select('Saab')
        cy.get('#animal').select('Cow')
        cy.get('#password').type('password')
        cy.get('#confirm').type('password')

        //The email field is empty
        cy.get('#email').should('be.empty')

        //Assert that submit button is still disabled
        cy.get('.submit_button').should('be.disabled')
    })

    it('Check that the submit button cannot be selected if first name is empty', () => {
         
        //Submit button by default is disabled and cannot be clicked
         cy.get(".submit_button").should('be.disabled')

        //Fill all mandatory fields except for the first name
        cy.get('[data-testid="user"]').type('something')
        cy.get('#email').type('xxx@gmail.com')
        cy.get('[data-testid="lastNameTestId"]').type('Wu')
        cy.get('[data-testid="phoneNumberTestId"]').type('123456')
        cy.get('#cars').select('Saab')
        cy.get('#animal').select('Cow')
        cy.get('#password').type('password')
        cy.get('#confirm').type('password')

        //The first name field is empty
        cy.get('[data-cy="name"]').should('be.empty')

        //Assert that submit button is still disabled
        cy.get('.submit_button').should('be.disabled')

    })

    it('Check that the submit button cannot be selected if last name is empty', () => {

        //Submit button by default is disabled and cannot be clicked
        cy.get(".submit_button").should('be.disabled')

        //Fill all mandatory fields except for the last name
        cy.get('[data-testid="user"]').type('something')
        cy.get('#email').type('xxx@gmail.com')
        cy.get('[data-cy="name"]').type('Gaoheng')
        cy.get('[data-testid="phoneNumberTestId"]').type('123456')
        cy.get('#cars').select('Saab')
        cy.get('#animal').select('Cow')
        cy.get('#password').type('password')
        cy.get('#confirm').type('password')

        //The last name field is empty
        cy.get('[data-testid="lastNameTestId"]').should('be.empty')

        //Assert that submit button is still disabled
        cy.get('.submit_button').should('be.disabled')
        
    })

    it('Check that the submit button cannot be selected if phone number is empty', () => {
        
        //Submit button by default is disabled and cannot be clicked
        cy.get(".submit_button").should('be.disabled')

        //Fill all mandatory fields except for the phone number
        cy.get('[data-testid="user"]').type('something')
        cy.get('#email').type('xxx@gmail.com')
        cy.get('[data-cy="name"]').type('Gaoheng')
        cy.get('[data-testid="lastNameTestId"]').type('Wu')
        cy.get('#cars').select('Saab')
        cy.get('#animal').select('Cow')
        cy.get('#password').type('password')
        cy.get('#confirm').type('password')

        //The phone number field is empty
        cy.get('[data-testid="phoneNumberTestId"]').should('be.empty')

        //Assert that submit button is still disabled
        cy.get('.submit_button').should('be.disabled')
    })

    it('Check that the submit button cannot be selected if both password and password confirmation are empty', () => {
        
        //Submit button by default is disabled and cannot be clicked
        cy.get(".submit_button").should('be.disabled')

        //Fill all mandatory fields except for the password and password confirmation fields
        cy.get('[data-testid="user"]').type('something')
        cy.get('#email').type('xxx@gmail.com')
        cy.get('[data-cy="name"]').type('Gaoheng')
        cy.get('[data-testid="lastNameTestId"]').type('Wu')
        cy.get('[data-testid="phoneNumberTestId"]').type('123456{enter}')
        cy.get('#cars').select('Saab')
        cy.get('#animal').select('Cow')
        
        //The password and password confirmation fields are empty
        cy.get('#password').should('be.empty')
        cy.get('#confirm').type('be.empty')

        //Assert that submit button is still disabled
        cy.get('.submit_button').should('be.disabled')
    })

    it('Check that the submit button cannot be selected if negative numbers are entered in the phone number field', () => {

        //Submit button by default is disabled and cannot be clicked
        cy.get(".submit_button").should('be.disabled')

        //Fill all mandatory fields except for the phone number field
        cy.get('[data-testid="user"]').type('something')
        cy.get('#email').type('xxx@gmail.com')
        cy.get('[data-cy="name"]').type('Gaoheng')
        cy.get('[data-testid="lastNameTestId"]').type('Wu')
        cy.get('#cars').select('Saab')
        cy.get('#animal').select('Cow')
        
        //type a negative number in the field of phone number
        cy.get('[data-testid="phoneNumberTestId"]').type('-1')

        //Assert that submit button is still disabled
        cy.get('.submit_button').should('be.disabled')
    })
})


// Workshop #7 create more visual tests

describe('Section 2: Visual tests', () => {
    it('Check that logo is correct and has correct size', () => {
        cy.log('Will check logo source and size')
        cy.get('img').should('have.attr', 'src').should('include', 'cerebrum_hub_logo')
        // get element and check its parameter height, to be equal 178
        cy.get('img').invoke('height').should('be.lessThan', 178)
            .and('be.greaterThan', 100)
    })

    // Create similar test for checking second picture
    it('Check that Cypress logo is correct and has correct size', () => {
        cy.get('[data-cy="cypress_logo"]').invoke('height').should('equal', 88)
        cy.get('[data-cy="cypress_logo"]').invoke('width').should('equal', 116)

    })

    it('Check navigation part', () => {
        cy.get('nav').children().should('have.length', 2)

        // Get navigation element, find siblings that contains h1 and check if it has Registration form in string
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')
        cy.get('nav').children().eq(0).should('be.visible')
            .and('have.attr', 'href', 'registration_form_1.html')
            .click()
        // Check that currently opened URL is value:
        cy.url().should('contain', '/registration_form_1.html')
        // Visit previous page
        cy.go('back')
        cy.log('Back again in registration form 2')
    })

    it('Check that URL to Cerebrum Hub page is correct and clickable', () => {
        //Create similar test for checking second link to Cerebrum Hub homepage
        cy.get('nav').children().should('have.length', 2)

        //Get navigation element, find siblings that contains h1 and check if it has Registration form in string
        cy.get('nav').children().eq(1).should('have.text', 'Cerebrum Hub homepage', 'be.visible')
        .and('have.attr', 'href', 'https://cerebrumhub.com/').click()

        // Check that currently opened URL is value:
        cy.url().should('contain','https://cerebrumhub.com')

        // Visit previous page
        cy.go('back')
    })

    it('Check that radio button list is correct', () => {
        // Array has totally 4 elements
        cy.get('input[type="radio"]').should('have.length', 4)
        /*
        .next() is needed because of HTML structure:
        <input type="radio" id="htmlFavLanguage" name="fav_language" value="HTML">
        <label for="htmlFavLanguage">HTML</label><br>
         */
        cy.get('input[type="radio"]').next().eq(0).should('have.text','HTML').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(1).should('have.text','CSS').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(2).should('have.text','JavaScript').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(3).should('have.text','PHP').and('not.be.checked')

        // Selecting one will remove selection from other radio button
        cy.get('input[type="radio"]').eq(0).check().should('be.checked')
        cy.get('input[type="radio"]').eq(1).check().should('be.checked')
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
    })

    it('Check that checkbox list is correct', () => {
        // Create test similar to previous one
        cy.get('[type="checkbox"]').should('have.length', 3)

        //cy.get('#vehicle1').next().should('have.text', 'I have a bike').and('not.be.checked')
        cy.get('#vehicle1').should('have.value', 'Bike').and('not.be.checked')
        cy.get('#vehicle2').should('have.value', 'Car').and('not.be.checked')
        cy.get('#vehicle3').should('have.value', 'Boat').and('not.be.checked')

        cy.get('#vehicle1').check().should('be.checked')
        cy.get('#vehicle2').check().should('be.checked')
        cy.get('#vehicle1').check().should('be.checked')

        cy.get('#vehicle1').uncheck().should('not.be.checked')
    })

    it('Car dropdown is correct', () => {
        // Select second element and create screenshot for this area, and full page
        // Don't forget to delete files and comment back if not using
        // cy.get('#cars').select(1).screenshot('Cars drop-down')
        // cy.screenshot('Full page screenshot')

        // Different solutions how get array length of elements in Cars dropdown
        cy.get('#cars').children().should('have.length', 4)
        cy.get('#cars').find('option').should('have.length', 4)
        cy.get('#cars').find('option').eq(0).should('have.text', 'Volvo')
        cy.get('#cars').find('option').then(options => {
            const actual = [...options].map(option => option.value)
            expect(actual).to.deep.eq(['volvo', 'saab', 'opel', 'audi'])
        })
    })

    it('Favourite animal dropdown is correct', () => {
        // Create test similar to previous one
        cy.get('#animal').children().should('have.length', 6)
        cy.get('#animal').find('option').eq(0).should('have.value', 'dog')
        cy.get('#animal').find('option').eq(1).should('have.value', 'cat')
        cy.get('#animal').find('option').eq(2).should('have.value', 'snake')
        cy.get('#animal').find('option').eq(3).should('have.value', 'hippo')
        cy.get('#animal').find('option').eq(4).should('have.value', 'spider')
        cy.get('#animal').find('option').eq(5).should('have.value', 'mouse')
    })
})

function inputValidData() {
    cy.log('Username will be filled')
    cy.get('input[data-testid="user"]').type('Something')
    cy.get('#email').type('validemail@yeap.com')
    cy.get('[data-cy="name"]').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('[data-testid="phoneNumberTestId"]').type('10203040')
    // If element has multiple classes, then one of them can be used
    cy.get('#password').type('MyPass')
    // To get multiple classes user .class1.class2 selector
    cy.get('#confirm').type('MyPass')
    cy.get('[name="confirm"]').type('InvalidMyPass')
    cy.get('h2').contains('Password').click()
}

