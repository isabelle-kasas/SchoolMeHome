import mongoose from 'mongoose';
import Subject from '../Class/Subject';
import Promo from '../Class/Promo';


const { Schema } = mongoose;

const StudentSchema = new Schema({
  user: {firstName:String, lastName: String, email: String},
  subject: [{type: Schema.Types.ObjectId, ref: "Subject"}],
  promo: [{type: Schema.Types.ObjectId, ref: "Promo"}],
})

export default mongoose.model("Student", StudentSchema);