import mongoose from 'mongoose';


const { Schema } = mongoose;

const StudentSchema = new Schema({
  user: {firstName:String, lastName: String, email: String, password: String},
  subject: [{type: Schema.Types.ObjectId, ref: "Subject"}],
  promo: [{type: Schema.Types.ObjectId, ref: "Promo"}],
})

export default mongoose.model("Student", StudentSchema);