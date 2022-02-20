import * as React from 'react'
import axios from 'axios'
import { Container, Card, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

type memoType = {
  title: string
  text: string
}

const Memos: React.VFC = () => {
  let memos: Array<memoType> = []
  axios.get('/api/memo', { params: { username: 'test' }
  }).then((res) => {
    memos = res.data
  }).catch((err) => {
    // データの取得に失敗した時の処理
  })

  return (
    <Container maxWidth="lg">
      <Card className="p-4">
        <Table aria-label="simple table">
          <TableBody>
            {memos.map((memo) => (
              <TableRow key={memo.title}>
                <TableCell component="th" scope="row">
                  {memo.title}
                </TableCell>
                <TableCell align="right">{memo.text}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Container>
  )
}

export default Memos
