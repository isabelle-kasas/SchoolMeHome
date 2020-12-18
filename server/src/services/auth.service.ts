import * as jwt from 'jsonwebtoken';
import UserClass from '../models/Class/User';
import * as argon from 'argon2'
import { UserService } from './UserService';
import { request } from 'express';

export class AuthService {

    async signin (email: string, password: string){
        const user = await UserService.findByEmail(email);

        if(!user){
            return "nope"
        }
        const valid = await argon.verify(user.password, password);
        if(!valid){
            return 'nope';
        }
        const userToken = {
            email: user.email,
            lastName: user.lastName,
            firstName: user.firstName
        };

        // const secret = process.env.JWT_SECRET;
        const token = jwt.sign(userToken, "secret");
         return {
            token,
            email: user.email,
            lastName: user.lastName,
            firstName: user.firstName
        };
    }
}
export const Auth = new AuthService();