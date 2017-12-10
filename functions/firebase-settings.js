const admin = require('firebase-admin')
const functions = require('firebase-functions')
const env = functions.config().tuangnee

admin.initializeApp(functions.config().firebase)

module.exports = {
  env,
  admin,
  functions
}
