import {Request, Response} from "express";
import Student from "../models/Schema/Student";

export = {
    create: async (req: Request, res: Response): Promise<void> => {
        await Student.init()
        const student = new Student(req.body);
        res.json({success: true, result: await student.save()})
    },
    read: async (req: Request, res: Response): Promise<void> => {
        await Student.find()
            .then((students) => {
                console.log(students.map(student => student._id))
                res.json({result: students});
            });
    },
    patch: async (req: Request, res: Response): Promise<void> => {
        const studentId = req.params.studentId
        const patchStudent = req.body
        const student = await Student.findOne({"_id": studentId})
        Object.assign(student, patchStudent)
        await student?.save()
        res.json({result: student})
    },
    update: async (req: Request, res: Response): Promise<void> => {
        const studentId = req.params.studentId
        const patchStudent = req.body
        const student = await Student.findOne({"_id": studentId})
        Object.assign(student, patchStudent)
        await student?.save()
        res.json({result: student})
    },
    findOne: async (req: Request, res: Response): Promise<void> => {
        const studentId = req.params.studentId
        await Student.findOne({"_id": studentId})
            .populate("subject")
            .populate("promo")
            .then((student) => {
                res.json({result: student});
            });
    },
}