import express from 'express';
import mongoose from 'mongoose';
import AdminMemberController from './controllers/AdminMemberController';
import PromoController from './controllers/PromoController';
import SubejctsController from './controllers/SubejctsController';
import controller from './controllers/SubejctsController';
import AdminMember from './models/Schema/AdminMember';


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

// mettre votre port local
app.listen(8888, () => console.log('app is running'));