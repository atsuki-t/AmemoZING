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
    <>
      <h1>Login</h1>
      <button onClick={login}>ログイン</button>
      <div>
        <Link href="/"><a>Homeへ</a></Link>
      </div>
    </>
  )
}

export default Login
