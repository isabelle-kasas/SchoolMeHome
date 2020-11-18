import React from 'react';
import { CardColumns } from 'react-bootstrap';
import { CardCalendarList } from './cardCalendarList';

const fakecalendar = [
    {name : 'M Dupont'},
    {name: 'M Simpson'}
];

export default function IntervenantListCalendar (){
    return(
        <CardColumns>
                    {fakecalendar.map( ({name}, key) => (<CardCalendarList name={name}></CardCalendarList>))}
        </CardColumns>
    )
}