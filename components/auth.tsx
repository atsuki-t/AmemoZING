import { useEffect } from "react"
import { useRouter } from "next/router"
import Cookies from "js-cookie"

const Auth: React.FC = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    // Cookieのチェック
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
