import mongoose from 'mongoose';
import User from '../Class/User';
import Lesson from "../Class/Lesson";

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    user: User,
    subject: [Subject],
    lessons: [Lesson], 
    promo: [Promo],
});

export default mongoose.model('TeacherModel', TeacherSchema);

