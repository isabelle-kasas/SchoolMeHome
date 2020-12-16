import { createContext, useState, FormEvent } from 'react'
import axios from 'axios'

export const AuthContext = createContext({ token: null });

export const useAuth = () => {
  const [token, setToken] = useState<any>(localStorage.getItem('authToken'))
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // try {
      console.log(e)
      setToken('Token-test')
      localStorage.setItem('authToken', 'Token-test')
      // const result = await axios.post( `${process.env.REACT_APP_API_URL}/login`, { email, password });
      // if (result.data.success) {
      // }
    // } catch (error) {
    //   console.error(error)
    // }
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
    formSubmit
  }
}