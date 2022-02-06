import connectDB from '../../middleware/mongodb'
import User from '../../models/user'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  await connectDB()

  switch (req.method) {
  case 'GET':
    try {
      const users = await User.find({})
      res.status(200).json({ success: true, data: users })
    } catch (error) {
      res.status(400).json({ success: false, error: error })
    }
    break

  case 'POST':
    try {
      const user = await User.create(req.body)
      res.status(201).json({ success: true, data: user })
    } catch (error) {
      res.status(400).json({ success: false, error: error })
    }
    break

  default:
    res.status(400).json({ success: false })
    break
  }
}
