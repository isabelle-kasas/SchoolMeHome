import mongoose, {Schema} from "mongoose";

const LessonSchema = new mongoose.Schema({
    name: String,
    subject: {type: Schema.Types.ObjectId, ref: "Subject"},
    start: Date,
    end: Date
});

export default mongoose.model("lesson", LessonSchema);
