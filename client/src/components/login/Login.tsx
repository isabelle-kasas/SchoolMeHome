import React from 'react'
import { useAuth } from '../../context/authContext'
import { Redirect } from 'react-router-dom'

const Login = () => {
  const { inputEmail, inputPassword, formSubmit, token } = useAuth()

  if (!!token) {
    return (
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    )
  } else {
    return (
      <div>
        <form onSubmit={formSubmit}>
          <input type="email" placeholder="email..." {...inputEmail} />
          <input type="password" placeholder="password..." {...inputPassword} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Login
