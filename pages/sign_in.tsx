import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Container, Card, TextField, Button, Typography, Avatar, CssBaseline } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const SignIn: React.VFC = () => {
  const router = useRouter()

  const submitContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username: String = event.currentTarget.username.value
    const password: String = event.currentTarget.password.value

    axios.get('/api/user_find', {
      params: {
        username: username,
        password: password
      }
    }).then((res) => {
      const { data } = res

      if (data) {
        Cookies.set('signedIn', 'true')
        router.replace('/memos')
      } else {
        // アカウントが見つからなかった時の処理
      }
    }).catch((err) => {
      // データの取得に失敗した時の処理
    })
  }

  return (
    <div className="bg-light vh-100 d-flex align-items-center">
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Card className="p-5">
          <div className="d-flex align-items-center flex-column">
            <Avatar className="bg-danger m-2">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <form onSubmit={submitContact} className="w-100">
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                type="password"
                id="password"
                label="Password"
                name="password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="my-4"
              >
                Sign In
              </Button>
            </form>
          </div>
          <Link href="/sign_up"><a className="text-primary">アカウント新規登録はこちら</a></Link>
        </Card>
      </Container>
    </div>
  )
}

export default SignIn
