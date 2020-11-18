import mongoose from 'mongoose';
import Student from "../Class/Student";
import Subject from "../Class/Subject";

const Schema = mongoose.Schema;

const PromoSchema = new Schema({
    name : {type: String},
    students: [{type: Schema.Types.ObjectId, ref: "Student"}],
    subject: [{type: Schema.Types.ObjectId, ref: "Subject"}],
    
})
export = mongoose.model('Promo', PromoSchema);

