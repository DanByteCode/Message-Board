const express = require('express')
const messageController = require('../controllers/message-controller')
const router = express.Router()

router.get('/', async function (req, res, next) {
  const messages = await messageController.getMessages()
  console.log(messages)
  res.render('index', { title: 'Message Board', list: messages })
})

module.exports = router
