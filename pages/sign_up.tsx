import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Container, Card, TextField, Button, Typography, Avatar, CssBaseline } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const SignUp: React.VFC = () => {
  const router = useRouter()
  const [alert, setAlert] = useState('')

  const registerAccount = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (alert) { setAlert(' ') }
    const username: String = event.currentTarget.username.value
    const password: String = event.currentTarget.password.value

    axios.post('/api/user', {
      username: username,
      password: password
    }).then((res) => {
      console.log(res)
      router.replace('/sign_in')
    }).catch((error) => {
      const error_code: number = error.response.data.code
      if (error_code == 11000) {
        setAlert('ユーザー名は既に存在しています。')
      } else {
        setAlert('データベースとの接続に失敗しました。')
      }
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
              Sign up
            </Typography>

            {alert && (
              <Alert severity="error" className="w-100 py-0 mt-3">{alert}</Alert>
            )}
            <form onSubmit={registerAccount} className="w-100" autoComplete="off">
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
                Sign Up
              </Button>
            </form>
          </div>
          <Link href="/sign_in"><a className="text-primary">ログインはこちら</a></Link>
        </Card>
      </Container>
    </div>
  )
}

export default SignUp
