import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Container, Card, Table, TableBody, TableRow, TableCell } from '@material-ui/core'

type memoType = {
  title: string
  text: string
}[]

const Memos: React.VFC = () => {
  const [memos, setMemos] = useState<memoType>([])
  useEffect(() => {
    const loginedUser = Cookies.get('loginedUser')
    axios.get('/api/memo', { params: { username: loginedUser } }).then((res) => { setMemos(res.data) })
  }, [])

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
