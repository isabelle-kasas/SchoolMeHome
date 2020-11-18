import React, { ReactElement, useState, FormEvent } from 'react';
import FullCalendar, { EventInput } from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';

const intervenant = [
  {
    name: 'M Dupont',
    id: '1'
  },
  {
    name: 'M Simpson',
    id: '2'
  },
]

const subjects = [{
  id: '1',
  name: 'HTML'
},
{
  id: '2',
  name: 'CSS'
},
{
  id: '3',
  name: 'REACT'
}]

const promos = [{
  id: '1',
  name: 'M1 intégration logicielle'
},
{
  id: '2',
  name: 'L1 développeur web'
}
]


const Calendar = (): ReactElement => {

  type LessonType = {
    start: string;
    end: string;
    subject: string;
    promo: string;
  }

  const [lessons, setLessons] = useState<EventInput[]>([])
  const [newLesson, setNewLesson] = useState<LessonType>({
    start: '',
    end: '',
    subject: subjects[0].name,
    promo: promos[0].name
  })
  const [show, setShow] = useState<Boolean>(false);

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);
  const handleChange = (e: any) => {
    setNewLesson({ ...newLesson, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLessons([...lessons, { id: `${lessons.length}`, title: `${newLesson.subject} / ${newLesson.promo}`, start: newLesson.start, end: newLesson.end }])
    setNewLesson({
      start: '',
      end: '',
      subject: subjects[0].name,
      promo: promos[0].name
    })
  }

  const saveChange = (info: any) => {
    const lessonsCopy = lessons.slice()
    lessonsCopy.filter(lesson => info.event.id === lesson.id)[0].start = info.event.startStr;
    lessonsCopy.filter(lesson => info.event.id === lesson.id)[0].end = info.event.endStr;
    setLessons(lessonsCopy)
  }

  let { id }: { id: string } = useParams();
  let prof = intervenant.find((i) => id === i.id);


  return (
    <>
      <h1> <Link to='/'>Gestion</Link> {'>'}  <Link to='/new'>Nouveau Calendrier Form</Link> {'>'} {prof && prof.name}</h1>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView='timeGridWeek'
        events={lessons}
        headerToolbar={{
          left: '',
          center: '',
          right: ''
        }}
        height='auto'
        locale='fr'
        hiddenDays={[0, 6]}
        slotDuration='00:30'
        slotMinTime='08:00'
        slotMaxTime='19:00'
        editable={true}
        selectable={true}
        select={function (info) {
          setNewLesson({ ...newLesson, start: info.startStr, end: info.endStr })
          handleShow()
        }}
        eventDrop={function (info) {
          saveChange(info)
        }}
        eventResize={function (info) {
          saveChange(info)
        }}
      />

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Nouveau cours</Modal.Title>
        </Modal.Header>
        <Form onSubmit={e => handleSubmit(e)}>
          <Modal.Body>
            <Form.Group className="d-flex">
              <Form.Label className="m-2" style={{width:"70px"}}>Matière</Form.Label>
              <Form.Control as="select" name="subject" value={newLesson.subject} onChange={e => handleChange(e)}>
                {subjects.map(subject => <option value={subject.name}>{subject.name}</option>)}
              </Form.Control>
            </Form.Group>
            <Form.Group className="d-flex">
              <Form.Label className="m-2" style={{width:"70px"}}>Promo</Form.Label>
              <Form.Control as="select" name="promo" value={newLesson.promo} onChange={e => handleChange(e)}>
                {promos.map(promo => <option value={promo.name}>{promo.name}</option>)}
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
          </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Sauvegarder
          </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default Calendar
