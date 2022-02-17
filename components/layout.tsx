import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Navbar from './navbar'
import Sidebar from './sidebar'
import Footer from './footer'

import routes from './routes'
import styles from './material-dashboard-style/layoutStyle'

const Layout: React.FC = ({ children }) => {
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={'AmemoZING'}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color='white'
      />
      <div className={classes.mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          color='white'
        />
        <div className={classes.content}>
          <div className={classes.container}>{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
