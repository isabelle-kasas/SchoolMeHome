import express from 'express';
import mongoose from 'mongoose';
import controller from './controllers/SubejctsController';

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


app.post('/api/subject', controller.create);
app.get('/api/subject', controller.read);
// mettre votre port local
app.listen(8888, () => console.log('app is running'));