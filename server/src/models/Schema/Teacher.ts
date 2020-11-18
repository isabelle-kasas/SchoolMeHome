import mongoose from 'mongoose';
import Lesson from "../Class/Lesson";
import Subject from "../Class/Subject";
import Promo from "../Class/Promo";

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    user: {firstName: String, lastName: String, email : String},
    subject: [{type: Schema.Types.ObjectId, ref: "Subject"}],
    lessons: [{type: Schema.Types.ObjectId, ref: "Lesson"}],
    promo: [{type: Schema.Types.ObjectId, ref: "Promo"}],
});

export default mongoose.model('Teacher', TeacherSchema);

