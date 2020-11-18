import React, { FormEvent, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const intervenant = [
    { name: 'M Dupont'},
    { name: 'M Simpson'},
]

export default function NewCalendarForm (){

    const [intervenantSelected , setIntervenantSelected ] = useState({});

    return(
        <div>
            <h1> <Link to='/'>Gestion</Link> {'>'}  Nouveau Calendrier Form</h1>
            <Form style={{width: '500px', margin: 'auto'}}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Choisir un intervenant :</Form.Label>
                    <Form.Control as="select" onChange={(e) => setIntervenantSelected(e.target.value)}>
                        { intervenant.map( ({name}) => (<option value={name}>{name}</option>))}
                    </Form.Control>
                </Form.Group>
                <button><Link to='/newcalendar'>Valider</Link></button>
            </Form>
        </div>
    )
}