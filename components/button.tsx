import React from 'react'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import styles from './material-dashboard-style/buttonStyle'

type Props = {
  color: string
  size?: string
  simple?: boolean
  round?: boolean
  disabled?: boolean
  block?: boolean
  link?: boolean
  justIcon?: boolean
  className?: any
  muiClasses?: any
}

const RegularButton: React.FC<Props> = ({ color, size = 'md', simple, round, disabled, block, link, justIcon, className, muiClasses, children }) => {
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  })
  return (
    <Button classes={{ ...muiClasses, root: btnClasses }}>
      {children}
    </Button>
  )
}

export default RegularButton
