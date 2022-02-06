import connectDB from '../../middleware/mongodb'
import User from '../../models/user'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  await connectDB()

  switch (req.method) {
  case 'GET':
    const username = req.query.username
    const password = req.query.password
    const data = await User.findOne({ username, password })
    res.status(200).json(data)
    break

  default:
    res.status(400).json({ success: false })
    break
  }
}
