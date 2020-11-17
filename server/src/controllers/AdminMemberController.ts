import AdminMember from "../models/Schema/AdminMember";

import {Request, Response} from 'express';


export = {
    create: async (req: Request, res: Response):Promise<void> => {
        await AdminMember.init()
        const newSubject = new AdminMember(req.body);
        res.json({success: true, result : await newSubject.save()})
    },
    read: async (req: Request, res: Response):Promise<void> => {
        await AdminMember.find()
            .then((adminMembers) => {
                res.json({result: adminMembers});
            });
    },
}
