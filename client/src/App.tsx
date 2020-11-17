import './App.css';
import React from 'react'
import Header from './components/header/header';
import GestionList from './components/gestionList/gestionList';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <GestionList></GestionList>
    </div>
  );
}

export default App;
