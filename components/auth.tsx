import { useEffect } from "react"
import { useRouter } from "next/router"
import Cookies from "js-cookie"

const Auth: React.FC = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    // ログイン画面とアカウント作成画面では Cookie のチェックをしない
    if (router.pathname == '/login' || router.pathname == '/sign_up') {
      return
    }

    // Cookie のチェック
    const signedIn = Cookies.get("signedIn")

    // signedIn が true じゃなければ /login へ
    if (signedIn !== "true") {
      router.replace("/login")
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}

export default Auth
