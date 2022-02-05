import { useRouter } from "next/router";
import { ReactNode } from "react";
import Cookies from "js-cookie"

type Props = {
  children: ReactNode
}

const Auth = ({ children }: Props) => {
  const router = useRouter()

  // Cookieのチェック
  const signedIn = Cookies.get("signedIn")

  // signedIn が true じゃなければ /login へ
  if (signedIn !== "true") {
    router.replace("/login")
  }

  return children;
}

export default Auth
