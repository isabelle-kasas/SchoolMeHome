import mongoose from "mongoose";
import User from "../Class/User";
import Teacher from "../Class/Teacher";
import Lesson from "../Class/Lesson";

const AdminMember = new mongoose.Schema({
    user: User,
    lessons: [Lesson],
    subjects: [Subject],
    teachers: [Teacher],
    students: [Student],
    promo: [Promo]
});

export default mongoose.model("AdminMemberModel", AdminMember);
