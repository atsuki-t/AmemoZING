import mongoose from 'mongoose'

const memoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String
  },
  created_date: {
    type: Date,
    required: true
  },
  updated_date: {
    type: Date,
    required: true
  }
})

export default memoSchema
