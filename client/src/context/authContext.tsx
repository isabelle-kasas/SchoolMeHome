import React, { createContext, useState, FormEvent, useContext } from 'react'
import { gql, useMutation } from '@apollo/client'

export const AuthContext = createContext<any>({});

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [token, setToken] = useState<any>(localStorage.getItem('authToken'))
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [alert, setAlert] = useState<boolean>(false)
  return <AuthContext.Provider value={{ token, setToken, email, setEmail, password, setPassword, firstName, setFirstName, lastName, setLastName, alert, setAlert }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {

  const { token, setToken, email, setEmail, password, setPassword, firstName, setFirstName, lastName, setLastName, alert, setAlert } = useContext(AuthContext)

  const SIGNIN = gql`
  mutation Signin (
    $email: String!
    $password: String!
  ) {
    signin(email: $email, password: $password){
      token
      user {
        firstName
        lastName
      }
    }
  }
`;

  const [signin] = useMutation<any>(SIGNIN);


  const formSubmit = (e: FormEvent) => {
    e.preventDefault();

    signin({ variables: { email: email, password: password } })
      .then((data) => {
        const result = data.data.signin
        if (result) {
          setToken(result.token)
          setFirstName(result.user.firsName)
          setLastName(result.user.lastName)
          setPassword(null)
          localStorage.setItem('authToken', result.token)
        } else {
          setAlert(true)
        }
      })
      .catch(err => console.error(err))

  }

  const disconnect = () => {
    setToken(null)
    setFirstName(null)
    setLastName(null)
    setEmail(null)
    localStorage.setItem('authToken', '')
  }

  const handleCloseMui = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(false);
  };

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
    disconnect,
    alert,
    handleCloseMui
  }
}