import mongoose from 'mongoose'
import memoSchema from './memo'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  memos: {
    type: [memoSchema],
    default: []
  }
})

export default mongoose.models.User || mongoose.model('User', userSchema)
