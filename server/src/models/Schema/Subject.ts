import mongoose from 'mongoose';
import Teacher from '../Class/Teacher';
import Student from '../Class/Student';
import Lesson from '../Class/Lesson';

const { Schema } = mongoose;

const SubjectSchema = new Schema({
  name: {type: String, unique: true},
 
});

export default mongoose.model('Subject', SubjectSchema);
