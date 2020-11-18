import AdminMember from "../models/Schema/AdminMember";

import {Request, Response} from 'express';


export = {
    create: async (req: Request, res: Response):Promise<void> => {
        await AdminMember.init()
        const adminMember = new AdminMember(req.body);
        res.json({success: true, result : await adminMember.save()})
    },
    read: async (req: Request, res: Response):Promise<void> => {
        await AdminMember.find()
            .then((adminMembers) => {
                res.json({result: adminMembers});
            });
    },
}
