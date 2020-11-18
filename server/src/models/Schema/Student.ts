import mongoose from 'mongoose';
import User from '../Class/User';
import Subject from '../Class/Subject';
import Promo from '../Class/Promo';


const { Schema } = mongoose;

const StudentSchema = new Schema({
  user: {firstName:String, lastName: String, email: String},
  subject: [{name: String}], 
  promo: [{name: String, students:[{firstName: String, lastName: String, email: String}], subject: [{name: String}]}],
})

export default mongoose.model("Student", StudentSchema);