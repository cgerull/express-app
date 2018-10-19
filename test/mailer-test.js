
/*
 * Test mailer
 */
console.log('Start Unit Tests');

// Run in test environment
process.env.NODE_ENV = 'test';

// Create Ethereal promise
let etherealAccount = new Promise((resolve, reject) => {
  console.log('Create promise etherealAccount');
  // Setup Ethereal testaccount
  const nodemailer = require('nodemailer');
  nodemailer.createTestAccount((err, account) => {
    if (err) {
      reject(err);
    }
    console.log('Credentials obtained: ' + JSON.stringify(account));
    resolve(account);
  });
});
// // Setup Ethereal testaccount
// nodemailer.createTestAccount((err, account) => {
//   if (err) {
//     console.error('Failed to create a testing account. ' + err.message);
//     return process.exit(1);
//   }
//   console.log('Credentials obtained, sending message...');
//   process.env.MAILSERVER = account.smtp.host;
//   process.env.MAILSERVERPORT = account.smtp.port;
//   process.env.MAILUSER = account.user;
//   process.env.MAILUSERPASSWORD = account.pass;


  // // Create a SMTP transporter object
  // let transporter = nodemailer.createTransport({
  //   host: account.smtp.host,
  //   port: account.smtp.port,
  //   secure: account.smtp.secure,
  //   auth: {
  //     user: account.user,
  //     pass: account.pass
  //   }
  // });


describe('Mailer functions', () => {
  before(() => {
    console.log('Preparing Mailer Tests');
    return etherealAccount
      .then(account => {
          console.log('Assign environment');
          process.env.MAILSERVER = 'smtp-mail.outlook.com';
           //account.smtp.host;
          process.env.MAILSERVERPORT = 587; //account.smtp.port;
          process.env.MAILSECURITY = false; //account.smtp.secure;
          process.env.MAILUSER = 'cgerull@live.com'; //account.user;
          process.env.MAILUSERPASSWORD = 'm1thr@nDir'; //account.pass;
          //done();
        },
        reject => {
          console.log('Error: ' + reject);
          //done(reject);
        })
    // Setup Ethereal testaccount
    // nodemailer.createTestAccount((err, account) => {
    //   if (err) {
    //     console.error('Failed to create a testing account. ' + err.message);
    //     return process.exit(1);
    //   }
    //   console.log('Credentials obtained: ' + JSON.stringify(account));
    //   process.env.MAILSERVER = account.smtp.host;
    //   process.env.MAILSERVERPORT = account.smtp.port;
    //   process.env.MAILUSER = account.user;
    //   process.env.MAILUSERPASSWORD = account.pass;
    // });
    done();      
  });     
  after(function () {
    //mailer.unload();
    console.log('Mailer Tests finished');
  });

  /*
  * Test the sendMail routine
  */
  describe('Send a testmail', () => {
    let mailer = require('../mailer');
    it('it should respond with an error message', (done) => {
    //   chai.request('http://localhost:3000')
    //     .post('/webhook')
    //     .set('Content-Type', 'application/json')
    //     .end((err, res) => {
    //       res.should.have.status(400);
    //       res.body.should.be.a('object');
    //       res.body.should.have.property('error');
    //       done();
    //     });
    // });
      let tstmailer = new mailer('cgerull@live.com', 'Test with Ethereal.');

      console.log("Mailer info: " + tstmailer.info());
      tstmailer.send();
      done();
    });
  });
});