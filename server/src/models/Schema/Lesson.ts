import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
    name: String,
    start: Date,
    end: Date

});

export default mongoose.model("lesson", LessonSchema);
