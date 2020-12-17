import User from "../models/Schema/User";
import * as argon from 'argon2'
import UserClass from "../models/Class/User";
import * as jwt from 'jsonwebtoken';


class UserServiceClass{
    
    async signUp (newUser:UserClass) {   
        await User.init();
        newUser.password = await argon.hash(newUser.password);
        const user = new User(newUser);
        await user.save();
        return user;    
    };

    async signin(email: string, password: string) {
        const user = await this.findByEmail(email);
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