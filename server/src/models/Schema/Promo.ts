import mongoose from 'mongoose';
import User from '../Class/User';

const Schema = mongoose.Schema;

const PromoSchema = new Schema({
    name : String,
    students: [Student],
    subject: [Subject], 
    
})
export = mongoose.model('PromoModel', PromoSchema);

