import './App.css';
import React from 'react';
import Header from './components/header/header';
import GestionList from './components/gestionList/gestionList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewCalendarForm from './components/calendar/newCalendarForm';
import NewCalendar from './components/calendar/newCalendar';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        
        <Switch>
          <Route path="/new">
            <NewCalendarForm />
          </Route>
          <Route path="/newcalendar">
            <NewCalendar />
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
