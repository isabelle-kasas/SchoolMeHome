import mongoose, {Schema} from "mongoose";
import Teacher from "../Class/Teacher";
import Lesson from "../Class/Lesson";
import Promo from "../Class/Promo";
import Student from "../Class/Student";
import Subject from "../Class/Subject";

const AdminMember = new mongoose.Schema({
    user: {firstName: String, lastName: String, email: String, password: String},
    lessons: [{type: Schema.Types.ObjectId, ref: "Lesson"}],
    subject: [{type: Schema.Types.ObjectId, ref: "Subject"}],
    teachers: [{type: Schema.Types.ObjectId, ref: "Teacher"}],
    students: [{type: Schema.Types.ObjectId, ref: "Student"}],
    promo: [{type: Schema.Types.ObjectId, ref: "Promo"}],
});

export default mongoose.model("AdminMember", AdminMember);
