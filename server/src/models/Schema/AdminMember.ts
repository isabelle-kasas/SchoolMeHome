import mongoose from "mongoose";
import User from "../Class/User";
import Teacher from "../Class/Teacher";
import Lesson from "../Class/Lesson";
import Promo from "../Class/Promo";
import Student from "../Class/Student";
import Subject from "../Class/Subject";

const AdminMember = new mongoose.Schema({
    user: {firstName: String, lastName: String, email: String},
    lessons: [{
        name: String,
        start: Date,
        end: Date
    }],
    subject: [{name: String}],
    teachers: [{
        user: {firstName: String, lastName: String, email: String},
        subject: [{name: String}],
        lessons: [{name: String, start: Date, end: Date}],
        promo: [{
            name: String,
            students: [{firstName: String, lastName: String, email: String}],
            subject: [{name: String}]
        }],
    }],
    students: [{
        firstName: String, lastName: String, email: String
    }],
    promo: [{
        name: String,
        students: [{firstName: String, lastName: String, email: String}],
        subject: [{name: String}]
    }],
});

export default mongoose.model("AdminMember", AdminMember);
