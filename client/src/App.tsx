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
  const routes = [
    {
      path: "/dashboard",
      exact: true,
      main: () => <h2>Home Dashboard</h2>
    },
    {
      path: "/profil",
      exact: true,
      main: () => <h2>Mon profil</h2>
    },
    {
      path: "/cours",
      exact: true,
      main: () => <h2>Mes cours</h2>
    }
  ];
  return (
    <AuthContext.Provider value={{ token }}>
      <div className="App">
          <Router>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>

              <PrivateRoute path="/">
                <Navbar/>
                <main>
                  <Switch>
                  {routes.map((route, index) => (
            
                    <PrivateRoute
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={route.main()}
                    />
                  ))}
                  </Switch>
                </main>
              </PrivateRoute>
            </Switch>
          </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
