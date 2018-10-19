console.log('Setting config');
const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';
const secretString = process.env.SECRET || 'myTestSecret';
// // mail configuration
// mailServer: process.env.MAILSERVER || mailAccount.serverName,
// mailServerPort: process.env.MAILSERVERPORT || mailAccount.serverPort,
// mailUser: process.env.MAILUSER || mailAccount.mailUserName,
// mailUserPw: process.env.MAILUSERPASSWORD || mailAccount.mailUserPassword,

const config = {
  root: rootPath,
  secret: secretString,
  app: {
    name: 'webHookTester'
  },
  port: process.env.PORT || 3000,
  // mail configuration
  mailServer: process.env.MAILSERVER,
  mailServerPort: process.env.MAILSERVERPORT,
  mailUser: process.env.MAILUSER,
  mailUserPw: process.env.MAILUSERPASSWORD
};

  // development: {
  //   root: rootPath,
  //   secret: secretString,
  //   app: {
  //     name: 'webHook-dev'
  //   },
  //   port: process.env.PORT || 3000,
  // },

  // test: {
  //   root: rootPath,
  //   secret: secretString,
  //   app: {
  //     name: 'webHook-test'
  //   },
  //   port: process.env.PORT || 3000,
  // },

  // production: {
  //   root: rootPath,
  //   secret: secretString,
  //   app: {
  //     name: 'webHookTester'
  //   },
  //   port: process.env.PORT || 80,
  // }
//};
//console.log('Finished config: ' + JSON.stringify(config));
module.exports = config;
