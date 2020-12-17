import User from "../models/Schema/User";
import * as argon from 'argon2'
import UserClass from "../models/Class/User";
import * as jwt from 'jsonwebtoken';
import {Auth}  from "./auth.service";


class UserServiceClass{
    
    async signUp (newUser:UserClass) {   
        await User.init();
        newUser.password = await argon.hash(newUser.password);
        const user = new User(newUser);
        await user.save();
        return user;    
    };
    
    async getAll(){
        return User.find();
    };

    async getById(userId :any){
        const user =  User.findById(userId);
        return user;
    };

    async findByEmail(email: string): Promise<UserClass>{
        const user = await User.findOne({email : email});
        return user as any;
    }
}
export const UserService = new UserServiceClass();