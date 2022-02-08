import mongoose from 'mongoose'

const memoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String
  }
})

export default memoSchema
