const mongoose = require("mongoose")

const Schema = mongoose.Schema

const credentialSchema = new Schema({
  userId: { type: String},
  password: { type: String },
}, {
  timestamps: [{ createdAt: 'created_at', updatedAt: 'updated_at' }],
})

module.exports = mongoose.model('Credential', credentialSchema)
