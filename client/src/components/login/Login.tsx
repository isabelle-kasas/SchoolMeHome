import React from 'react'
import { useAuth } from '../../context/authContext'
import { Redirect, NavLink } from 'react-router-dom'
import './Login.css'
import Button from '@material-ui/core/Button'



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
      <div className="main-login-page">
      <div className="login-page">
        <nav className="login-nav-container">
          <div>
            <NavLink to="#" className="navlink-login">Help</NavLink>
            <NavLink to="#" className="navlink-login">Contact us</NavLink>
          </div>
          <div>
            <NavLink to="#" className="navlink-login">Sign in</NavLink>
            <Button className="button-template">Sign Up</Button>
          </div>
        </nav>
        <div className="login-main-container">
          <div className="login-left-container">
            <h1>SCHOOL ME HOME</h1>
          </div>
          <div className="login-right-container">
            <form onSubmit={formSubmit}>
              <input type="email" placeholder="email..." {...inputEmail} />
              <input type="password" placeholder="password..." {...inputPassword} />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Login
