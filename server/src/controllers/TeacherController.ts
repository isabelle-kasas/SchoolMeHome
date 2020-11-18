import {Request, Response} from "express";
import Teacher from "../models/Schema/Teacher";


export = {
    create: async (req: Request, res: Response):Promise<void> => {
        await Teacher.init()
        const teacher = new Teacher(req.body);
        res.json({success: true, result : await teacher.save()})
    },
    read: async (req: Request, res: Response):Promise<void> => {
        await Teacher.find()
            .then((teachers) => {
                res.json({result: teachers});
            });
    },
}