import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Auth from '../components/auth'
import Layout from '../components/layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Auth>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth>
  )
}

export default MyApp
