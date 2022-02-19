import connectDB from '../../middleware/mongodb'
import User from '../../models/user'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  await connectDB()

  switch (req.method) {
  case 'GET':
    try {
      const username = req.query.username
      const data = await User.findOne({ username })
      res.status(200).json(data.memos)
    } catch (error) {
      res.status(400).json({ success: false, error: error })
    }
    break

  case 'POST':
    try {
      const username = req.query.username
      const title = req.query.title
      const text = req.query.text
      const data = await User.updateOne({ username }, { $set: { memos: { title, text } }})
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
