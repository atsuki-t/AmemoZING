import connectDB from '../../middleware/mongodb'
import User from '../../models/user'
import type { NextApiRequest, NextApiResponse } from 'next'

const UserAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB()

  switch (req.method) {
  case 'GET':
    try {
      const username = req.query.username
      const password = req.query.password
      const data = await User.findOne({ username, password })
      res.status(200).json({ success: true, data })
    } catch (error) {
      res.status(400).json({ success: false, error: error })
    }
    break

  case 'POST':
    try {
      const data = await User.create(req.body)
      res.status(201).json({ success: true, data })
    } catch (error) {
      res.status(400).json({ success: false, error: error })
    }
    break

  default:
    res.status(400).json({ success: false })
    break
  }
}

export default UserAPI
