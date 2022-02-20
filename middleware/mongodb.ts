import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    '.env.local ファイルの中で MONGODB_URI の変数を定義してください。'
  )
}

const connectDB = () => {
  mongoose.connect(MONGODB_URI)
}

export default connectDB
