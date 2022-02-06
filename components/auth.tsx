import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const Auth: React.FC = ({ children }) => {
  const [showChild, setShowChild] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // ログイン画面とアカウント作成画面では Cookie のチェックをしない
    if (router.pathname == '/login' || router.pathname == '/sign_up') {
      setShowChild(true)
      return
    }

    // Cookie のチェック
    const signedIn = Cookies.get('signedIn')

    // signedIn が true であれば画面を表示し、false であれば /login へ移動する
    if (signedIn) {
      setShowChild(true)
    } else {
      router.replace('/login')
    }
  }, [router])

  if (!showChild) {
    return null
  }

  return <>{children}</>
}

export default Auth
