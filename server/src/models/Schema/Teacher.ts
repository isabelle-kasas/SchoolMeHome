import mongoose from 'mongoose';
import User from '../Class/User';

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    user: User,
    subject: [Subject],
    lessons: [Lesson], 
    promo: [Promo],
});

export = mongoose.model('TeacherModel', TeacherSchema);

