import Subject from "../models/Schema/Subject";

import {Request, Response} from 'express';
import Promo from "../models/Schema/Promo";


export = {
    create: async (req: Request, res: Response):Promise<void> => {
        await Subject.init() 
        const newSubject = new Subject(req.body);
        res.json({success: true, result : await newSubject.save()})
    },
    read: async (req: Request, res: Response):Promise<void> => {
    await Subject.find()
        .then((subjects) => {
            res.json({result: subjects});
        });
    },
    patch: async (req: Request, res: Response): Promise<void> => {
        const subjectId = req.params.subjectId
        const patchSubject = req.body
        const subject = await Subject.findOne({"_id": subjectId})
        Object.assign(subject, patchSubject)
        await subject?.save()
        res.json({result: subject})
    },
    update: async (req: Request, res: Response): Promise<void> => {
        const subjectId = req.params.subjectId
        const updateSubject = req.body
        const subject = await Subject.findOne({"_id": subjectId})
        Object.assign(subject, updateSubject)
        await subject?.save()
        res.json({result: subject})
    },
    findOne: async (req: Request, res: Response): Promise<void> => {
        const subjectId = req.params.subjectId
        await Subject.findOne({"_id": subjectId})
            .populate("students", "user _id")
            .then((subject) => {
                res.json({result: subject});
            });
    },

}
 