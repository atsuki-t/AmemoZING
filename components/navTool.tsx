import React from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import Cookies from 'js-cookie'

import { makeStyles } from '@material-ui/core/styles'
import { MenuItem, MenuList, Grow, Paper, ClickAwayListener, Hidden, Popper, Divider } from '@material-ui/core'
import { Person, Search } from '@material-ui/icons'

import CustomInput from './customInput'
import Button from './button'
import styles from './material-dashboard-style/navTool'

const NavTool: React.VFC = () => {
  const router = useRouter()
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  const [openProfile, setOpenProfile] = React.useState<any>(null)

  const handleClickProfile = (event: any) => {
    event.preventDefault()
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null)
    } else {
      setOpenProfile(event.currentTarget)
    }
  }

  const logout = () => {
    setOpenProfile(null)
    Cookies.remove('signedIn')
    router.replace('/login')
  }

  return (
    <div>
      <div className={classes.searchWrapper}>
        <CustomInput
          formControlProps={{ className: classes.margin + ' ' + classes.search }}
          inputProps={{ placeholder: 'Search', inputProps: { 'aria-label': 'Search' } }}
        />
        <Button color="white" aria-label="edit" justIcon round>
          <Search />
        </Button>
      </div>
      <div className={classes.manager}>
        <div onClick={handleClickProfile}>
          <Button
            color={'transparent'}
            justIcon={true}
            simple={false}
            aria-owns={openProfile ? 'profile-menu-list-grow' : null}
            aria-haspopup="true"
            className={classes.buttonLink}
          >
            <Person className={classes.icons} />
            <Hidden mdUp implementation="css">
              <p className={classes.linkText}>Profile</p>
            </Hidden>
          </Button>
        </div>
        <Popper
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={classNames({ [classes.popperClose]: !openProfile }) + ' ' + classes.popperNav}
        >
          {({ TransitionProps, placement }) => (
            <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
              <Paper>
                <ClickAwayListener onClickAway={() => setOpenProfile(null)}>
                  <MenuList role="menu">
                    <MenuItem onClick={logout} className={classes.dropdownItem}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  )
}

export default NavTool
