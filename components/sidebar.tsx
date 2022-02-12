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
    return router.route.indexOf(routeName) > -1 ? true : false
  }
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var activePro = ' '
        var listItemClasses
        if (prop.path === '/upgrade-to-pro') {
          activePro = classes.activePro + ' '
          listItemClasses = classNames({
            [' ' + classes[color]]: true,
          })
        } else {
          listItemClasses = classNames({
            [' ' + classes[color]]: activeRoute(prop.path),
          })
        }
        const whiteFontClasses = classNames({
          [' ' + classes.whiteFont]:
            activeRoute(prop.path) ||
            prop.path === '/upgrade-to-pro',
        })
        return (
          <Link href={prop.path} key={key}>
            <a className={activePro + classes.item}>
              <ListItem button className={classes.itemLink + listItemClasses}>
                {typeof prop.icon === 'string' ? (
                  <Icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: false,
                    })}
                  >
                    {prop.icon}
                  </Icon>
                ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses, {
                      [classes.itemIconRTL]: false,
                    })}
                  />
                )}
                <ListItemText
                  primary={prop.name}
                  className={classNames(classes.itemText, whiteFontClasses, {
                    [classes.itemTextRTL]: false,
                  })}
                  disableTypography={true}
                />
              </ListItem>
            </a>
          </Link>
        )
      })}
    </List>
  )
  var brand = (
    <div className={classes.logo}>
      <a
        href="https://www.creative-tim.com?ref=njsmd-sidebar"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: false,
        })}
        target="_blank" rel="noreferrer"
      >
        <div className={classes.logoImage}>
          {/* ロゴ */}
          {/* <img src="amemozing.jpg" alt="logo" className={classes.img} /> */}
        </div>
        {logoText}
      </a>
    </div>
  )
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: false,
            }),
          }}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div
            className={classes.background}
            style={{ backgroundColor: 'gray' }}
          />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={'left'}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: false,
            }),
          }}
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
