import * as React from 'react'
import Link from "next/link"
import { useRouter } from "next/router"
import Cookies from "js-cookie"

const Login: React.FC = () => {
  const router = useRouter()

  //ログイン処理（CookieにsignedIn=trueとする）
  const login = () => {
    Cookies.set("signedIn", "true")
    router.replace("/")
  }

  return (
    <div className="vh-100 d-flex align-items-center">
      <div className="container">
        <div className="card bg-light p-5 mx-5">
          <p className="fs-3 text-center mb-4">ログイン</p>

          <div className="mb-4">
            <label htmlFor="usernameInput" className="form-label">ユーザー名</label>
            <input className="form-control" id="usernameInput"></input>
          </div>

          <div className="mb-5">
            <label htmlFor="passwordInput" className="form-label">パスワード</label>
            <input className="form-control" id="passwordInput"></input>
          </div>

          <button onClick={login} className='btn btn-primary mb-3'>ログイン</button>
          <Link href="/"><a className="text-primary">アカウント新規登録はこちら</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Login
