import express from 'express';
import mongoose from 'mongoose';
import AdminMemberController from './controllers/AdminMemberController';
import PromoController from './controllers/PromoController';
import SubejctsController from './controllers/SubjectsController';
import StudentController from './controllers/StudentsController';
import TeacherController from './controllers/TeacherController';


const app = express();

// mettre votre port mDB et le nom de votre BDD locale
mongoose.connect('mongodb://localhost:27017/home', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
})
// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Subject API
app.post('/api/subject', SubejctsController.create);
app.get('/api/subject', SubejctsController.read);

//AdminMember API
app.post('/api/admin_member', AdminMemberController.create)
app.get('/api/admin_member', AdminMemberController.read)

//Promo API
app.post('/api/promo', PromoController.create);
app.get('/api/promo', PromoController.read);
app.patch('/api/promo/:promoId', PromoController.patch);

//Student API
app.post('/api/student', StudentController.create);
app.get('/api/student', StudentController.read);

//Teacher API
app.post('/api/teacher', TeacherController.create)
app.get('/api/teacher', TeacherController.read)

// mettre votre port local
app.listen(8888, () => console.log('app is running'));