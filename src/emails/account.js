const sgMail = require('@sendgrid/mail')
const sendGridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendGridAPIKey)


const welcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'nikjmakin@gmail.com',
        subject: 'Welcome to Task Manager !',
        text: `Welcome to the Task Manager, ${name}. Let us know what would you like to see in the future!`
    }

    sgMail.send(msg)
}

const arrivederciEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'nikjmakin@gmail.com',
        subject: 'Off you go',
        text: `${name}, we are truly sad that you are leaving us. Did you dislike anything about our app? Let us know !`
    }
    sgMail.send(msg)
}

module.exports = {
    welcomeEmail,
    arrivederciEmail
}