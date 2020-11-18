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
}