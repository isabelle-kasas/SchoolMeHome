import React, { useEffect, useState } from 'react';
import { CardColumns } from 'react-bootstrap';
import { CardCalendarList } from './cardCalendarList';
import Axios from 'axios';

export default function IntervenantListCalendar (){
    const [teachers, setTeachers] = useState([]);

    const getTeachers = async () => {
        try {
            const resultList = await Axios.get('http://localhost:3000/api/teacher/has_lesson');
            console.log(resultList.data.result);
            setTeachers(resultList.data.result);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTeachers();
    }, [])

    return(
        <CardColumns>
            {teachers.map( ({user, _id}: any) => (<CardCalendarList name={user.firstName} firstname={user.lastName}></CardCalendarList>))}
        </CardColumns>
    )
}