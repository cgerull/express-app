/* Wrapper class for nodemailer
* Require ES6
*/
console.log('Starting mailer.js');
// const nodeMailer = require('nodemailer');
// const config = require('./config/config');
// console.log('loaded config: ' + JSON.stringify(config));

var mailer = function(recipient, message) {
  const nodeMailer = require('nodemailer');
  const config = require('./config/config');
  //console.log('loaded config: ' + JSON.stringify(config));
  console.log('init mailer module');
  //console.log('loaded config: ' + JSON.stringify(config));
  const smtpConfig = {
    //pool: false,
    // host: config.mailServer,
    // port: config.mailServerPort,
    // secure: true, // use TLS
    host: process.env.MAILSERVER,
    port: process.env.MAILSERVERPORT,
    secure: process.env.MAILSECURITY, // use TLS
    auth: {
      // user: config.mailUser,
      // pass: config.mailUserPw
      user: process.env.MAILUSER,
      pass: process.env.MAILUSERPASSWORD
    }
  };

  // Create mailer tansport
  console.log('Create mail transport config with '
      +' host: ' + smtpConfig.host
      +', port: ' + smtpConfig.port
      +', secureConnection: ' + smtpConfig.secure
      +', user: ' + smtpConfig.auth.user
      +', pasword: ' + smtpConfig.auth.pass);
  const transporter = nodeMailer.createTransport(smtpConfig);

  this.mail = {
    from: config.mailUser,
    to: recipient,
    subject: 'Webhook received',
    text: message
  };

  this.send = function(){
    console.log('Send mail');
    transporter.sendMail(this.mail, function(err, info) {
        if (err) {
          console.log(err);
          return err;
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Server responded: ' + info.response);
        return info;
      });
  };

  this.info = function() {
    return 'Config: ' + JSON.stringify(config) + '\n' /
      'Environment: ' + JSON.stringify(process.env) + '\n' /
      'Mail body: ' + JSON.stringify(this.mail);
  };
};



module.exports = mailer;

