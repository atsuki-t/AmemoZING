import React from 'react'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, Input } from '@material-ui/core'
import Clear from '@material-ui/icons/Clear'
import Check from '@material-ui/icons/Check'

import styles from './material-dashboard-style/customInputStyle'

type Props = {
  labelText?: string
  labelProps?: object
  id?: string
  inputProps?: object
  formControlProps?: {
    className: string
  }
  error?: boolean
  success?: boolean
}

const CustomInput: React.VFC<Props> = ({ labelText, labelProps, id, inputProps, formControlProps, error, success }) => {
  const useStyles = makeStyles(styles)
  const classes = useStyles()

  const labelClasses = classNames({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error,
  })
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
  })
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined,
  })
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps?.className + ' ' + classes.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      />
      {error ? (
        <Clear className={classes.feedback + ' ' + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + ' ' + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  )
}

export default CustomInput
