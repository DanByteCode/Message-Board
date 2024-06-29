const express = require('express')
const messageController = require('../controllers/message-controller')
const router = express.Router()

router.post('/', async function (req, res, next) {
  try {
    await messageController.addMessage(req.body)
    res.redirect('/')
  } catch (err) {
    console.log('error')
    next(err)
  }
})
router.get('/', function (req, res, next) {
  res.render('new', { title: 'Add Message' })
})

module.exports = router
