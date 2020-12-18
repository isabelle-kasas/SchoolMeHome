import React, { createContext, useState, FormEvent, useContext, Dispatch } from 'react'
import axios from 'axios'

export const AuthContext = createContext<any>({});

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [token, setToken] = useState<any>(localStorage.getItem('authToken'))
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  return <AuthContext.Provider value={{ token, setToken, email, setEmail, password, setPassword, firstName, setFirstName,lastName, setLastName }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {

  const { token, setToken, email, setEmail, password, setPassword, firstName, setFirstName,lastName, setLastName } = useContext(AuthContext)

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${process.env.REACT_APP_API_URL}/api/signin`, { email, password });
      if (result.data.token) {
        setToken(result.data.token)
        setFirstName(result.data.firstName)
        setLastName(result.data.lastName)
        localStorage.setItem('authToken', result.data.token)
      } else {
        alert('mauvais mdp')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const disconnect = () => {
    setToken(null)
    setFirstName(null)
    setLastName(null)
    setEmail(null)
    setPassword(null)
    localStorage.setItem('authToken', '')
  }

  return {
    inputEmail: {
      value: email,
      onChange: (e: FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value),
    },
    inputPassword: {
      value: password,
      onChange: (e: FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value),
    },
    token,
    setToken,
    formSubmit,
    firstName,
    lastName,
    disconnect
  }
}