import {Request, Response} from "express";
import Teacher from "../models/Schema/Teacher";
import Promo from "../models/Schema/Promo";


export = {
    create: async (req: Request, res: Response): Promise<void> => {
        await Teacher.init()
        const teacher = new Teacher(req.body);
        res.json({success: true, result: await teacher.save()})
    },
    read: async (req: Request, res: Response): Promise<void> => {
        await Teacher.find()
            .populate("promo")
            .populate("lessons")
            .populate("subject")
            .then((teachers) => {
                res.json({result: teachers});
            });
    },
    patch: async (req: Request, res: Response): Promise<void> => {
        const teacherId = req.params.teacherId
        const patchTeacher = req.body
        const teacher = await Promo.findOne({"_id": teacherId})
        Object.assign(teacher, patchTeacher)
        await teacher?.save()
        res.json({result: teacher})
    },
    update: async (req: Request, res: Response): Promise<void> => {
        const teacherId = req.params.teacherId
        const updateTeacher = req.body
        const teacher = await Promo.findOne({"_id": teacherId})
        Object.assign(teacher, updateTeacher)
        await teacher?.save()
        res.json({result: teacher})
    },
    findOne: async (req: Request, res: Response): Promise<void> => {
        const teacherId = req.params.teacherId
        await Teacher.findOne({"_id": teacherId})
            .populate("promo")
            .populate("lessons")
            .populate("subject")
            .then((teacher) => {
                res.json({result: teacher});
            });
    },
    findLesson: async (req: Request, res: Response): Promise<void> => {
        const teacherId = req.params.teacherId
        await Teacher.findOne({"_id": teacherId})
            .populate("promos")
            .populate("lessons")
            .populate("subject").select("lessons")
            .then((lessons) => {
                res.json({result: lessons});
            });
    },
    findPromo: async (req: Request, res: Response): Promise<void> => {
        const teacherId = req.params.teacherId
        await Teacher.findOne({"_id": teacherId})
            .populate("promos")
            .populate("lessons")
            .populate("subject").select("promo")
            .then((promo) => {
                res.json({result: promo});
            });
    },
    findSubject: async (req: Request, res: Response): Promise<void> => {
        const teacherId = req.params.teacherId
        await Teacher.findOne({"_id": teacherId})
            .populate("lessons")
            .populate("lessons")
            .populate("subject").select("subject")
            .then((subject) => {
                res.json({result: subject});
            });
    }
}