import * as React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Container, Card, TextField, Button } from '@material-ui/core'

const NewMemo: React.VFC = () => {
  const router = useRouter()

  const createMemo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username: String = 'test'
    const title: String = event.currentTarget.memoTitle.value
    const text: String = event.currentTarget.text.value

    axios.post('/api/memo', {
      username,
      title,
      text
    }).then((res) => {
      router.replace('/memos')
    }).catch((err) => {
      // 通信に失敗した時、もしくは保存に失敗した時の処理
    })
  }

  return (
    <Container maxWidth="lg">
      <Card className="p-4">
        <form onSubmit={createMemo} className="w-100" autoComplete="off">
          <TextField
            margin="normal"
            required
            fullWidth
            id="memoTitle"
            label="タイトル"
            name="memoTitle"
          />

          <TextField
            margin="normal"
            fullWidth
            multiline
            minRows={8}
            id="text"
            label="本文"
            name="text"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="my-4"
          >
            作成
          </Button>
        </form>
      </Card>
    </Container>
  )
}

export default NewMemo
