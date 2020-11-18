import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardColumns } from 'react-bootstrap';
import { CardCalendarList } from './cardCalendarList';

const fakecalendar = [
        {name : 'L1 développeur web'},
        {name: 'M1 intégration logicielle'}
];

export default function PromotionListCalendar (){
    return(
        <CardColumns>
                    {fakecalendar.map( ({name}, key) => (<CardCalendarList name={name}></CardCalendarList>))}
        </CardColumns>
    )
}