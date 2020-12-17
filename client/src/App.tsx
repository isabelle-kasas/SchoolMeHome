import React from 'react';
import Login from './components/login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext, useAuth } from './context/authContext'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import './App.css';
import './index.css'
import { Navbar } from './components/navbar/navbar';

function App() {
  const { token } = useAuth()
  console.log(window.location.pathname)
  return (
    <AuthContext.Provider value={{ token }}>
      <div className="App">
      {/* <Navbar></Navbar> */}
        <main className={window.location.pathname === "/login" ? "main-login" : ""}>
          <Router>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <PrivateRoute exact path="/">
                Acceuil
          </PrivateRoute>
            </Switch>
          </Router>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
