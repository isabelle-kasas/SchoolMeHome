import React from 'react'
import { useAuth } from '../../context/authContext'
import { Redirect, NavLink } from 'react-router-dom'
import './Login.css'
import Button from '../global/button/Button';
import Input from '../global/input/Input'


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
            <Button>Sign Up</Button>
          </div>
        </nav>
        <div className="login-main-container">
          <div className="login-left-container">
            <h1>SCHOOL ME <br/> HOME</h1>
          </div>
          <div className="login-right-container">
            <form onSubmit={formSubmit} className="login-form-container">
              <Input style={{ marginBottom: "50px" }} type="email" placeholder="Enter email" {...inputEmail}/>
              <Input style={{ marginBottom: "60px" }} type="password" placeholder="Enter password" {...inputPassword}/>
              <Button type="submit">Sign in</Button>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Login
