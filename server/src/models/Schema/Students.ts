import mongoose from 'mongoose';
import User from './User';
import Subject from './Subject';
import Promo from './Promo';

const { Schema } = mongoose;

const wilderSchema = new Schema({
  user: User,
  subject: [Subject],
  promo: [Promo]
})