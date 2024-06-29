const MessageModel = require('../models/message')

async function getMessages () {
  return await MessageModel.getAll()
}

async function addMessage (query) {
  const user = query.user
  const message = query.message
  return await MessageModel.addMessage({ user, message })
}
module.exports = { getMessages, addMessage }
