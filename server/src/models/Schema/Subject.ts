import mongoose from 'mongoose';

const { Schema } = mongoose;

const SubjectSchema = new Schema({
  name: {type: String, unique: true},
});

export default mongoose.model('Subject', SubjectSchema);
