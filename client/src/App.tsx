import React from 'react';
import Login from './components/login/Login';
import GestionList from './components/gestionList/gestionList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewCalendarForm from './components/calendar/newCalendarForm';
import Calendar from './components/calendar/Calendar';
import { AuthContext, useAuth } from './context/authContext'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import './App.css';
import { Navbar } from './components/navbar/navbar';

function App() {
  const { token } = useAuth()
  return (
    <AuthContext.Provider value={{ token }}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/">
              accueil
          </PrivateRoute>
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
