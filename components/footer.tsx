import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from './material-dashboard-style/footerStyle'

const Footer: React.VFC = () => {
  const useStyles = makeStyles(styles)
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <p className={classes.center}>
        Copyright &copy; 2022 atsuki-t, gunzi-s
      </p>
    </footer>
  )
}

export default Footer
