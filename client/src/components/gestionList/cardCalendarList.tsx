import React from 'react';
import { Button, Card } from 'react-bootstrap';
import calendar from '../../icons/Circle-icons-calendar.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.scss';

type CardCalendarProps = {
    name: string,
}

export function CardCalendarList ({name}: CardCalendarProps){
    return(
        
        <Card style={{ width: '10rem' }} border="dark" className="text-center">
            <Card.Img variant="top" src={calendar} style={{ width: '70%' }}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant="primary">Modifier</Button>
            </Card.Body>
        </Card>
    )
}