import express from 'express';
import mongoose from 'mongoose';
// import cors from 'cors';
import AdminMemberController from './controllers/AdminMemberController';
import PromoController from './controllers/PromoController';
import SubjectsController from './controllers/SubjectsController';
import StudentController from './controllers/StudentsController';
import TeacherController from './controllers/TeacherController';
import LessonController from './controllers/LessonController';
const cors = require('cors')

const app = express();
app.use(cors());

// mettre votre port mDB et le nom de votre BDD locale
mongoose.connect('mongodb://127.0.0.1:27017/home', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
}).then(() => console.log("DB Connected"))
// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

//Subject API
app.post('/api/subject', SubjectsController.create);
app.get('/api/subject', SubjectsController.read);
app.get('/api/subject/:subjectId', SubjectsController.findOne);
app.patch('/api/subject/:subjectId', SubjectsController.patch);
app.put('/api/subject/:subjectId', SubjectsController.update);

//AdminMember API
app.post('/api/admin_member', AdminMemberController.create)
app.get('/api/admin_member', AdminMemberController.read)
app.get('/api/admin_member/:adminId', AdminMemberController.findOne)
app.patch('/api/admin_member/:adminId', AdminMemberController.patch)
app.put('/api/admin_member/:adminId', AdminMemberController.update)

//Promo API
app.post('/api/promo', PromoController.create);
app.get('/api/promo', PromoController.read);
app.get('/api/promo/:promoId', PromoController.read);
app.patch('/api/promo/:promoId', PromoController.patch);
app.put('/api/promo/:promoId', PromoController.update);

//Student API
app.post('/api/student', StudentController.create);
app.get('/api/student', StudentController.read);
app.get('/api/student/:studentId', StudentController.findOne);
app.patch('/api/student/:studentId', StudentController.patch);
app.put('/api/student/:studentId', StudentController.update);

//Teacher API
app.post('/api/teacher', TeacherController.create)
app.get('/api/teacher', TeacherController.read)
app.get('/api/teacher/has_lesson', TeacherController.findTeachersWithLessons)
app.get('/api/teacher/:teacherId', TeacherController.findOne)
app.get('/api/teacher/lessons/:teacherId', TeacherController.findLesson)
app.get('/api/teacher/promo/:teacherId', TeacherController.findPromo)
app.get('/api/teacher/subject/:teacherId', TeacherController.findSubject)
app.patch('/api/teacher/:teacherId', TeacherController.patch)
app.put('/api/teacher/:teacherId', TeacherController.update)

//Teacher API
app.post('/api/teacher', TeacherController.create)
app.get('/api/teacher', TeacherController.read)
app.get('/api/teacher/:teacherId', TeacherController.findOne)
app.patch('/api/teacher/:teacherId', TeacherController.patch)
app.put('/api/teacher/:teacherId', TeacherController.update)

//Lesson API
app.post('/api/lesson', LessonController.create)
app.get('/api/lesson', LessonController.read)
app.get('/api/lesson/:lessonId', LessonController.findOne)
app.patch('/api/lesson/:lessonId', LessonController.patch)
app.put('/api/lesson/:lessonId', LessonController.update)


// mettre votre port local
app.listen(3000, () => console.log('app is running'));