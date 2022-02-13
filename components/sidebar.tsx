import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { makeStyles } from '@material-ui/core/styles'
import { Drawer, Hidden, List, ListItem, ListItemText, Icon } from '@material-ui/core'

import type { dashboardRoutesType } from './routes'
import styles from './material-dashboard-style/sidebarStyle'

type Props = {
  routes: dashboardRoutesType
  logoText: string
  handleDrawerToggle: any
  open: boolean
  color: string
}

const Sidebar: React.VFC<Props> = ({ routes, logoText, handleDrawerToggle, open, color }) => {
  const router = useRouter()

  const useStyles = makeStyles(styles)
  const classes = useStyles()

  function activeRoute(routeName: string) {
    return router.route.indexOf(routeName) > -1
  }
  const links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        const listItemClasses = classNames({
          [' ' + classes[color]]: activeRoute(prop.path),
        })
        const whiteFontClasses = classNames({
          [' ' + classes.whiteFont]: activeRoute(prop.path)
        })
        return (
          <Link href={prop.path} key={key}>
            <a className={classes.item}>
              <ListItem button className={classes.itemLink + listItemClasses}>
                <prop.icon className={classNames(classes.itemIcon, whiteFontClasses)} />
                <ListItemText
                  primary={prop.name}
                  className={classNames(classes.itemText, whiteFontClasses)}
                  disableTypography={true}
                />
              </ListItem>
            </a>
          </Link>
        )
      })}
    </List>
  )
  const brand = (
    <div className={classes.logo}>
      <Link href="/">
        <a className={classNames(classes.logoLink)}>
          {logoText}
        </a>
      </Link>
    </div>
  )
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          anchor="right"
          variant="temporary"
          open={open}
          classes={{ paper: classNames(classes.drawerPaper) }}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          <div
            className={classes.background}
            style={{ backgroundColor: 'gray' }}
          />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          variant="permanent"
          classes={{ paper: classNames(classes.drawerPaper) }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          <div
            className={classes.background}
            style={{ backgroundColor: 'gray' }}
          />
        </Drawer>
      </Hidden>
    </div>
  )
}

export default Sidebar
