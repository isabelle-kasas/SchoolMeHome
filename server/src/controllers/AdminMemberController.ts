import AdminMember from "../models/Schema/AdminMember";

import {Request, Response} from 'express';
import Promo from "../models/Schema/Promo";
import Lesson from "../models/Schema/Lesson";


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
    patch: async (req: Request, res: Response): Promise<void> => {
        const adminId = req.params.adminId
        const patchAdmin = req.body
        const adminMember = await AdminMember.findOne({"_id": adminId})
        Object.assign(adminMember, patchAdmin)
        await adminMember?.save()
        res.json({result: adminMember})
    },
    update: async (req: Request, res: Response): Promise<void> => {
        const adminId = req.params.adminId
        const updateAdmin = req.body
        const adminMember = await AdminMember.findOne({"_id": adminId})
        Object.assign(adminMember, updateAdmin)
        await adminMember?.save()
        res.json({result: adminMember})
    },
    findOne: async (req: Request, res: Response): Promise<void> => {
        const adminId = req.params.adminId
        await AdminMember.findOne({"_id": adminId})
            .populate("students", "user _id")
            .then((adminMember) => {
                res.json({result: adminMember});
            });
    },
}
