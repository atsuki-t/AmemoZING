import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import axios from 'axios'

const SignUp: React.VFC = () => {
  const router = useRouter()

  const registerAccount = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username: String = event.currentTarget.username.value
    const password: String = event.currentTarget.password.value

    axios.post('/api/user', {
      username: username,
      password: password
    }).then((res) => {
      router.replace('/login')
    }).catch((err) => {
      // 通信に失敗した時、もしくは保存に失敗した時の処理
    })
  }

  return (
    <div className="vh-100 d-flex align-items-center">
      <div className="mx-auto" style={{ minWidth: 800 }}>
        <div className="card bg-light p-5">
          <p className="fs-3 text-center mb-4">アカウント新規登録</p>

          <form onSubmit={registerAccount}>
            <div className="mb-4">
              <label htmlFor="usernameInput" className="form-label">ユーザー名</label>
              <input className="form-control" id="usernameInput" name='username' required></input>
            </div>

            <div className="mb-4">
              <label htmlFor="passwordInput" className="form-label">パスワード</label>
              <input className="form-control" id="passwordInput" name="password" required></input>
            </div>

            <button type='submit' className='btn btn-primary mb-4'>アカウント作成</button>
          </form>

          <Link href="/login"><a className="text-primary">ログインはこちら</a></Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
