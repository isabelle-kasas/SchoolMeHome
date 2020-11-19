import React, { ReactElement, useState, FormEvent, useEffect } from 'react';
import FullCalendar, { EventInput } from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Button, Modal, Form, Breadcrumb, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

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

const Calendar = (): ReactElement => {
  const [intervenant, setIntervenant] = useState<any>([]);
  const getTeachers = async () => {
    try {
        const resultList = await axios.get('http://localhost:3000/api/teacher');
        console.log(resultList.data.result);
        setIntervenant(resultList.data.result);
    } catch (error) {
        console.log(error)
    }
  }

  type LessonType = {
    start: string;
    end: string;
    subject: { name: string, id: string };
    promo: string;
  }

  const [lessons, setLessons] = useState<EventInput[]>([])
  const [newLesson, setNewLesson] = useState<LessonType>({
    start: '',
    end: '',
    subject: { name: '', id: '' },
    promo: ''
  })
  const [show, setShow] = useState<Boolean>(false);
  const [subjects, setSubjects] = useState<{ name: string, _id: string }[]>();
  const [promos, setPromos] = useState<{ name: string }[]>();
  let { id }: { id: string } = useParams();
  let prof:any = intervenant.find((i: any) => id === i._id);


  useEffect(() => {
    const fetchData = async () => {
      try {
        getTeachers();
        const resultSubject = await axios('http://localhost:3000/api/subject');
        setSubjects(resultSubject.data.result);
        const resultPromo = await axios('http://localhost:3000/api/promo');
        setPromos(resultPromo.data.result);
        const resultLessons = await axios('http://localhost:3000/api/lesson');
        setLessons(resultLessons.data.result.map((d: any): EventInput => {
          console.log(resultSubject.data.result, d.subject)
          return ({
            id: d._id,
            title: `${resultSubject.data.result.find((s: any) => d.subject._id === s._id).name} / ${d.name}`,
            start: d.start,
            end: d.end
          })
        }))
        setNewLesson({ ...newLesson, subject: { name: resultSubject.data.result[0].name, id: resultSubject.data.result[0]._id }, promo: resultPromo.data.result[0].name })
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [])

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);
  const handleChange = (e: any) => {
    setNewLesson({ ...newLesson, [e.target.name]: e.target.value })
  }
  const handleChangeSubject = (e: any) => {
    setNewLesson({ ...newLesson, subject: { id: e.target.id, name: e.target.value } })
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const fetchData = async () => {
      try {
        const result = await axios.post(`http://localhost:3000/api/teacher/lessons/${id}`, {
          name: newLesson.promo,
          subject: newLesson.subject.id,
          start: newLesson.start,
          end: newLesson.end
        })
        setLessons([...lessons, { id: `${result.data.result._id}`, title: `${newLesson.subject.name} / ${newLesson.promo}`, start: newLesson.start, end: newLesson.end }])
      } catch (error) {
        console.error(error);
      }
    };
    fetchData()

  }

  const saveChange = (info: any) => {
    const fetchData = async () => {
      try {
        const result = await axios.put(`http://localhost:3000/api/lesson/${info.event.id}`, {
          start: info.event.startStr,
          end: info.event.endStr
        })
        const lessonsCopy = lessons.slice()
        lessonsCopy.filter(lesson => info.event.id === lesson.id)[0].start = info.event.startStr;
        lessonsCopy.filter(lesson => info.event.id === lesson.id)[0].end = info.event.endStr;
        setLessons(lessonsCopy)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  }
  
  if (subjects && promos) {
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Gestion
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Calendrier
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1> Calendrier : {prof && prof.user.firstName} {prof && prof.user.lastName}</h1>
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
                <Form.Label className="m-2" style={{ width: "70px" }}>Matière</Form.Label>
                <Form.Control as="select" name="subject" id={newLesson.subject.id} value={newLesson.subject.name} onChange={e => handleChangeSubject(e)}>
                  {subjects.map(subject => <option value={subject.name}>{subject.name}</option>)}
                </Form.Control>
              </Form.Group>
              <Form.Group className="d-flex">
                <Form.Label className="m-2" style={{ width: "70px" }}>Promo</Form.Label>
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
  } else {
    return <Spinner animation="border" variant="primary" />
  }

}

export default Calendar
