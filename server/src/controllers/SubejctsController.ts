import Subject from "../models/Schema/Subject";

import {Request, Response} from 'express';


export = {
    create: async (req: Request, res: Response):Promise<void> => {
        await Subject.init() 
        const newSubject = new Subject(req.body);
        res.json({succes: true, result : await newSubject.save()})
    },
    read: async (req: Request, res: Response):Promise<void> => {
    await Subject.find()
        .then((subjects) => {
            res.json({result: subjects});
        });
    },
}
 