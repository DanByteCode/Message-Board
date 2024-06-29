const mon = require('mongoose')
const Schema = mon.Schema

const messageSchema = new Schema({
  user: { type: String, required: true, trim: true, maxLength: 24 },
  text: { type: String, required: true, trim: true, maxLength: 120 },
  date: { type: Date, default: Date.now }
})
const model = mon.model('Message', messageSchema)
const view = {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    ret.date = `${ret.date.getDate()}/${ret.date.getMonth()}/${ret.date.getFullYear()}`
    delete ret._id
    delete ret.__v
    return ret
  }
}
messageSchema.set('toObject', view)
messageSchema.set('toJSON', view)
module.exports = model
