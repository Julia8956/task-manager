const sgMail = require('@sendgrid/mail');

// const sendgridAPIKey = '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';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'minji6654@gmail.com',
//   from: 'minji6654@gmail.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);
const from = 'minji6654@gmail.com';

const sendWelcomeEmail = (to, name) => {
  console.log('sending email');
  sgMail.send({
    to,
    from,
    subject: 'Thank you for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    // html: ''
  });
};

const sendCancelationEmail = (to, name) => {
  sgMail.send({
    to,
    from,
    subject: 'GoodBye, your account has been canceled',
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};