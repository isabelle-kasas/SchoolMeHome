import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PromoSchema = new Schema({
    name : {type: String},
    students: [{type: Schema.Types.ObjectId, ref: "Student"}],
    lessons: [{type: Schema.Types.ObjectId, ref: "Lesson"}],
})
export = mongoose.model('Promo', PromoSchema);

