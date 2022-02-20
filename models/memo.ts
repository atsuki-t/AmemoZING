import mongoose from 'mongoose'

const memoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: true
  }
})

export default memoSchema
