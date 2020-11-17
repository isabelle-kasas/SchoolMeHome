
import {Request, Response} from 'express';
import Promo from '../models/Schema/Promo';


export = {
    create: async (req: Request, res: Response):Promise<void> => {
        await Promo.init() 
        const newPromo = new Promo(req.body);
        res.json({succes: true, result : await newPromo.save()})
    },
    read: async (req: Request, res: Response):Promise<void> => {
    await Promo.find()
        .then((promos) => {
            res.json({result: promos});
        });
    },
}
 