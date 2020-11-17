import express from 'express';
import mongoose from 'mongoose';
import subjectController from './controllers/SubejctsController';
import adminMemberController from './controllers/AdminMemberController';

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
app.post('/api/subject', subjectController.create);
app.get('/api/subject', subjectController.read);

//AdminMember API
app.post('/api/admin_member', adminMemberController.create)
app.get('/api/admin_member', adminMemberController.read)

// mettre votre port local
app.listen(8888, () => console.log('app is running'));