import React from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Hidden } from '@material-ui/core'
import Menu from '@material-ui/icons/Menu'

import NavTool from './navTool'

import type { dashboardRoutesType } from './routes'
import styles from './material-dashboard-style/navbarStyle'

type Props = {
  routes: dashboardRoutesType
  handleDrawerToggle: any
  color: string
}

const Header: React.VFC<Props> = ({ routes, handleDrawerToggle, color }) => {
  const router = useRouter()
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  const appBarClasses = classNames({ [' ' + classes[color]]: color })

  function makeBrand() {
    let name = 'NextJS Material Dashboard'
    routes.map((prop) => {
      if (router.route.indexOf(prop.path) !== -1) {
        name = prop.name
      }
      return null
    })
    return name
  }

  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <span className={classes.title}>
            {makeBrand()}
          </span>
        </div>
        <Hidden smDown implementation="css">
          <NavTool />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default Header
