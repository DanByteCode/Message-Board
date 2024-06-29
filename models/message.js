const mon = require('mongoose')
const Message = require('./schema/message')
const config = require('../config')

mon.set('strictQuery', false)
mon.connect(config.URI)
  .then(() => {
    console.log('Database Connected')
  })
  .catch((err) => {
    console.error(err.message)
  })

async function getAll () {
  const result = await Message.find({})
  return result
}

async function addMessage (data) {
  try {
    return await Message.create({
      user: data.user,
      text: data.message,
      added: new Date()
    })
  } catch (err) {
    return err
  }
}

module.exports = {
  getAll,
  addMessage
}
