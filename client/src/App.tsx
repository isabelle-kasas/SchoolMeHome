import React from 'react';
import Header from './components/header/header';
import GestionList from './components/gestionList/gestionList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewCalendarForm from './components/calendar/newCalendarForm';
import Calendar from './components/calendar/Calendar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        
        <Switch>
          <Route path="/new">
            <NewCalendarForm />
          </Route>
          <Route path="/calendar/:id">
            <Calendar />
          </Route>
          <Route path="/">
            <GestionList></GestionList>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
