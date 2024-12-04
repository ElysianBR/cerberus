const locators = {
    LOGIN: {
        inputEmail: '#email',
        inputPassword: '#password'
    },
    SIGNUP: {
        inputName: '#name',
        inputSurname: '#lastName',
        inputEmail: '#email',
        inputPassword: '#password',
        createAccountBtn: 'button[type="submit"]',
    },
    HEADER: {
        homeBtn: '[data-testid="section-button-home"]',
        aboutBtn: '[data-testid="section-button-about"]',
        contactBtn: '[data-testid="section-button-contact"]',
        loginBtn: '[data-testid="section-button-login"]',
        planBtn: '[data-testid="section-button-plans"]',
    },
    FOOTER: {
        InstagramBtn: '[data-testid="InstagramIcon"]',
        linkedinBtn: '[data-testid="LinkedInIcon"]',
        mailBtn: '[data-testid="MailOutlineIcon"]',
        whatsBtn: '[data-testid="WhatsAppIcon"]',
    }
}

export default locators;