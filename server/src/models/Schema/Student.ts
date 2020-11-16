import mongoose from 'mongoose';
import User from '../Class/User';
import Subject from '../Class/Subject';
import Promo from '../Class/Promo';


const { Schema } = mongoose;

const StudentSchema = new Schema({
  user: User,
  subject: [Subject],
  promo: [Promo]
})

export default mongoose.model("student", StudentSchema);