
import {Request, Response} from 'express';
import Promo from '../models/Schema/Promo';
import Teacher from "../models/Schema/Teacher";
import {arrayNotEmpty} from "class-validator";


export = {
    create: async (req: Request, res: Response):Promise<void> => {
        await Promo.init() 
        const newPromo = new Promo(req.body);
        res.json({success: true, result : await newPromo.save()})
    },
    read: async (req: Request, res: Response):Promise<void> => {
    await Promo.find()
        .populate("students", "user _id")
        .populate("subject")
        .then((promos) => {
            res.json({result: promos});
        });
    },
    patch: async (req: Request, res: Response): Promise<void> => {
        const promoId = req.params.promoId
        const patchPromo = req.body
        const promo = await Promo.findOne({"_id": promoId})
        Object.assign(promo, patchPromo)
        await promo?.save()
        res.json({result: promo})
    },
    update: async (req: Request, res: Response): Promise<void> => {
        const promoId = req.params.promoId
        const patchPromo = req.body
        const promo = await Promo.findOne({"_id": promoId})
        Object.assign(promo, patchPromo)
        await promo?.save()
        res.json({result: promo})
    },
    findOne: async (req: Request, res: Response): Promise<void> => {
        const promoId = req.params.promoId
        await Promo.findOne({"_id": promoId})
            .populate("students", "user _id")
            .populate("subject")
            .then((promo) => {
                res.json({result: promo});
            });
    },
    promoHasLesson: async (req: Request, res: Response): Promise<void> => {
        await Promo.find()
            .populate("students")
            .populate("lessons")
            .then((promos: any[]) => {
                const promoWithLessons= promos.filter((lesson) =>
                    arrayNotEmpty(lesson.lessons)
                )
                if (arrayNotEmpty(promoWithLessons)) {
                    res.json({result: promoWithLessons});
                } else {
                    res.json({result: []});
                }
            });
    }
}
