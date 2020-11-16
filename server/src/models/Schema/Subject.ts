import mongoose from 'mongoose';
import Teacher from '../Class/Teacher';
import Student from '../Class/Student';
import Lesson from '../Class/Lesson';

const { Schema } = mongoose;

const SubjectSchema = new Schema({
  name: String,
  teacher: [Teacher],
  student: [Student],
  lessons: [Lesson],
});

export default mongoose.model('SubjectModel', SubjectSchema);
