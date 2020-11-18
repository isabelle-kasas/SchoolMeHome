import React from 'react';
import { Link } from 'react-router-dom';

export default function NewCalendar (){
    return(
        <h1> <Link to='/'>Gestion</Link> {'>'}  <Link to='/new'>Nouveau Calendrier </Link> {'>'} Marie </h1>
    )
}