import express from 'express';
import mongoose from 'mongoose';

const app = express();

// mettre votre port mDB et le nom de votre BDD locale
mongoose.connect('mongodb://localhost:27017/shoolMeHome', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
})


// mettre votre port locam
app.listen(8888, () => console.log('app is running'));