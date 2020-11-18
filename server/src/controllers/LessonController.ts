import {Request, Response} from 'express';
import Lesson from "../models/Schema/Lesson";


export = {
    create: async (req: Request, res: Response): Promise<void> => {
        await Lesson.init()
        const lesson = new Lesson(req.body);
        res.json({success: true, result: await lesson.save()})
    },
    read: async (req: Request, res: Response): Promise<void> => {
        await Lesson.find()
            .populate("subject")
            .then((lessons) => {
                res.json({result: lessons});
            });
    },
    patch: async (req: Request, res: Response): Promise<void> => {
        const lessonId = req.params.lessonId
        const patchLesson = req.body
        const lesson = await Lesson.findOne({"_id": lessonId})
        Object.assign(lesson, patchLesson)
        await lesson?.save()
        res.json({result: lesson})
    },
    update: async (req: Request, res: Response): Promise<void> => {
        const lessonId = req.params.lessonId
        const updateLesson = req.body
        const lesson = await Lesson.findOne({"_id": lessonId})
        Object.assign(lesson, updateLesson)
        await lesson?.save()
        res.json({result: lesson})
    },
    findOne: async (req: Request, res: Response): Promise<void> => {
        const lessonId = req.params.lessonId
        await Lesson.findOne({"_id": lessonId})
            .populate("subject")
            .then((lesson) => {
                res.json({result: lesson});
            });
    },
}
