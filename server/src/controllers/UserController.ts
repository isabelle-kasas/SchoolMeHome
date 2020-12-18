import User from "../models/Schema/User";
import {Application, Request, response, Response} from "express";
import {UserService} from "../services/UserService";
import { Auth } from "../services/auth.service";


export const UserController = (app : Application) => {

    app.post('/api/signup', async (req: Request, res: Response) => {
        const user = await UserService.signUp(req.body)
        res.send({success: true, result: user})
    });

    app.post('/api/signin',  async (req:Request, res: Response) =>{
        const user = await UserService.signin(req.body.email, req.body.password);
        res.send(user);
    });
    app.get('/api/user/:userId', async(req, res): Promise<void> => {
        const user = await UserService.getById(req.params.userId);
        res.send({result: user});
    });
    
    app.get('/api/userAll', async (req: Request, res: Response) => {
        const users = await User.find()
        res.send({result : users})
    });
    // app.get('/api/signin/:email', async (req: Request, res:Response): Promise<void> =>{  
    //     const user = await UserService.findByEmail(req.params.email);
    //     res.json({user});
    // })

}
    
