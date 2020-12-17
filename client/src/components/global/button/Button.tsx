import React from 'react'
import ButtonMUI from '@material-ui/core/Button'
import './Button.css'

const Button = ({ children, type }: any) => {
  return (
    <ButtonMUI className="button" type={type}>{children}</ButtonMUI>
  )
}

export default Button
