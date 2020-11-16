import mongoose from 'mongoose';
import User from "../Class/User";


const { Schema } = mongoose;

const StudentSchema = new Schema({
  user: User,
  subject: [Subject],
  promo: [Promo]
})

export default mongoose.model("student", StudentSchema);
