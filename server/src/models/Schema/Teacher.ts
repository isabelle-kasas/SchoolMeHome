import mongoose from 'mongoose';
import User from '../Class/User';
import Lesson from "../Class/Lesson";
import Subject from "../Class/Subject";
import Promo from "../Class/Promo";

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    user: {firstName: String, lastName: String, email : String},
    subject: [{name: String}], 
    lessons: [{name: String, start: Date, end: Date}], 
    promo: [{name: String, students:[{firstName: String, lastName: String, email: String}], subject: [{name: String}]} ],
});

export default mongoose.model('TeacherModel', TeacherSchema);

