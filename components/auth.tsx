import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import Layout from '../components/layout'

const Auth: React.FC = ({ children }) => {
  const router = useRouter()
  const path = router.pathname
  const [showChild, setShowChild] = useState(false)
  const [showLayout, setShowLayout] = useState(false)

  useEffect(() => {
    setShowChild(false)
    setShowLayout(false)
    // ログイン画面とアカウント作成画面では Cookie のチェックをしない
    if (path == '/' || path == '/sign_in' || path == '/sign_up') {
      setShowChild(true)
      return
    }

    // Cookie のチェック
    const signedIn = Cookies.get('signedIn')
    const loginedUser = Cookies.get('loginedUser')

    // signedIn が true であれば画面を表示し、false であれば /sign_in へ移動する
    if (signedIn && loginedUser) {
      setShowChild(true)
      setShowLayout(true)
    } else {
      router.replace('/sign_in')
    }
  }, [router, path])

  if (!showChild) {
    return null
  } else if (!showLayout) {
    return <>{children}</>
  } else {
    return <Layout>{children}</Layout>
  }
}

export default Auth
