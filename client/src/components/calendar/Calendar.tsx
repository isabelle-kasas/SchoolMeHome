import React, { ReactElement, useState } from 'react';
import FullCalendar, { EventInput } from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Calendar = (): ReactElement => {

  // type LessonType = {
  //   start: String;
  //   end: String;
  //   subject: String;
  //   promo: String;
  // }

  const [lessons, setLessons] = useState<EventInput[]>([])
  const [newLesson, setNewLesson] = useState({
    start: '',
    end: '',
    subject: '',
    promo: ''
  })
  const [show, setShow] = useState<Boolean>(false);

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);
  const handleChange = (e: any) => {
    setNewLesson({ ...newLesson, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLessons([...lessons, { id: `${lessons.length}`, title: newLesson.promo, start: newLesson.start, end: newLesson.end }])
    setNewLesson({
      start: '',
      end: '',
      subject: '',
      promo: ''
    })
  }

  const saveChange = (info: any) => {
    const lessonsCopy = lessons.slice()
    lessonsCopy.filter(lesson => info.event.id === lesson.id)[0].start = info.event.startStr;
    lessonsCopy.filter(lesson => info.event.id === lesson.id)[0].end = info.event.endStr;
    setLessons(lessonsCopy)
  }


  return (
    <>
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
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Matière" name="subject" value={newLesson.subject} onChange={e => handleChange(e)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Promo" name="promo" value={newLesson.promo} onChange={e => handleChange(e)} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default Calendar
