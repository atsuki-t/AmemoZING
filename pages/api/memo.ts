import connectDB from '../../middleware/mongodb'
import User from '../../models/user'
import type { NextApiRequest, NextApiResponse } from 'next'

const MemoAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB()

  switch (req.method) {
  case 'GET':
    try {
      const username = req.query.username
      const data = await User.findOne({ username })
      res.status(200).json(data.memos)
    } catch (error) {
      res.status(400).json({ error })
    }
    break

  case 'POST':
    try {
      const username = req.body.username
      const title = req.body.title
      const text = req.body.text
      const data = await User.updateOne({ username }, { $push: { memos: { title, text } } })
      res.status(201).json({ data })
    } catch (error) {
      res.status(400).json({ error })
    }
    break

  default:
    res.status(400).json({ success: false })
    break
  }
}

export default MemoAPI
