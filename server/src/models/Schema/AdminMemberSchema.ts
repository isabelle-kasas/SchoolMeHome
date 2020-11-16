import mongoose from "mongoose";

const AdminMemberSchema = new mongoose.Schema({
    user: User,
    lessons: [Lesson],
    subjects: [Subject],
    teachers: [Teacher],
    students: [Sutdents],
    promo: [Promo]
});

export = mongoose.model("admin_member", AdminMemberSchema);
