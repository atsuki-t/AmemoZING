import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import axios from 'axios'

const Login: React.FC = () => {
  const router = useRouter()

  const submitContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username: String = event.currentTarget.username.value;
    const password: String = event.currentTarget.password.value;

    axios.get('/api/user_find', {
      params: {
        username: username,
        password: password
      }
    }).then((res) => {
      const { data } = res;
      if (data) {
        Cookies.set("signedIn", "true")
        router.replace("/")
      } else {
        // ログイン失敗時の処理
      }
    })
  }

  return (
    <div className="vh-100 d-flex align-items-center">
      <div className="container">
        <div className="card bg-light p-5 mx-5">
          <p className="fs-3 text-center mb-4">ログイン</p>

          <form onSubmit={submitContact}>
            <div className="mb-4">
              <label htmlFor="usernameInput" className="form-label">ユーザー名</label>
              <input className="form-control" id="usernameInput" name='username' required></input>
            </div>

            <div className="mb-4">
              <label htmlFor="passwordInput" className="form-label">パスワード</label>
              <input className="form-control" id="passwordInput" name="password" required></input>
            </div>

            <button type='submit' className='btn btn-primary mb-4'>ログイン</button>
          </form>

          <Link href="/"><a className="text-primary">アカウント新規登録はこちら</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Login
