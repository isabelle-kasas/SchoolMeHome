import React from 'react';
import { Link } from 'react-router-dom';

export default function NewCalendarForm (){
    return(
        <div>
            <h1> <Link to='/'>Gestion</Link> {'>'}  Nouveau Calendrier Form</h1>
            <div>
                <button><Link to='/newcalendar'>Valider</Link></button>
            </div>
        </div>
    )
}