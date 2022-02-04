import mongoose from 'mongoose'

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', user)

export default User
