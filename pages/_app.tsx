import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Auth from '../components/auth'
import ThemeConfig from '../components/minimal-template/theme'
import GlobalStyles from '../components/minimal-template/theme/globalStyles'
import Layout from '../components/layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Auth>
      <ThemeConfig>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeConfig>
    </Auth>
  )
}

export default MyApp
