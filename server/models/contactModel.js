const mongoose = require("mongoose")

const Schema = mongoose.Schema

const contactSchema = new Schema({
  userId: { type: String},
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  gender: { type: String},
  zipCode: { type: Number},
}, {
  timestamps: [{ createdAt: 'created_at', updatedAt: 'updated_at' }],
})

module.exports = mongoose.model('Contact', contactSchema)
