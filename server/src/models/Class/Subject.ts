import Teacher from './Teacher';
import Student from './Student';
import Lesson from './Lesson';

export default class Subject {
  private name!: String;
  private teacher!: Teacher[];
  private student!: Student[];
  private lessons!: Lesson[];
}