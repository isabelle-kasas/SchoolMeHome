import mongoose from 'mongoose';
import User from '../Class/User';
import Student from "../Class/Student";
import Subject from "../Class/Subject";

const Schema = mongoose.Schema;

const PromoSchema = new Schema({
    name : String,
    students: [Student],
    subject: [Subject], 
    
})
export = mongoose.model('PromoModel', PromoSchema);

