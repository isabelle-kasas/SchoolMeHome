import mongoose from 'mongoose';
import User from '../Class/User';
import Student from "../Class/Student";
import Subject from "../Class/Subject";

const Schema = mongoose.Schema;

const PromoSchema = new Schema({
    name : {type: String},
    students: [{firstName: String, lastName: String, email: String}],
    subject: [{name: String}], 
    
})
export = mongoose.model('PromoModel', PromoSchema);

