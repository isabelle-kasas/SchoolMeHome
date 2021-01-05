import * as jwt from 'jsonwebtoken';
import * as argon from 'argon2'
import { UserService } from './UserService';
import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../models/Class/User';
import { Arg, Mutation } from 'type-graphql';
import { Mail } from '../services/MailService';
import { AuthResult } from '../models/Class/AuthResult';

export class AuthService {

    public async signin(email, password){
        const model = getModelForClass(User);
        const user = await model.findOne({ email });
        if (user && await argon.verify(user.password, password) === true) {
            const UserToken = {userId: user.id, userEmail: user.email}
            const token = jwt.sign(UserToken, "secret");
            return { token, user };
        } else {
            return null as any;
        }
    }
    @Mutation(() => AuthResult, {nullable : true})
    public async passwordLost(@Arg('email') email: string){
        const user =  await UserService.findByEmail(email);
        if (user) {
            const provisoryToken = {userEmail : user.email, userFirstName : user.firstName, userLastName : user.lastName};
            const token = jwt.sign(provisoryToken, "secret");
            await Mail.main(email)
            return {user, token}
        }
    }
    public decodeToken( token):any{
        return jwt.verify(token, "secret")
    }
    @Mutation(() => User)
    public async verifyToken(@Arg('token') token :string) :Promise<User>{
        const authorization= token
        const bearerToken = authorization.split(' ')[1];
        const secret = "secret"
        const result: any = await jwt.verify(bearerToken, secret);
        const user = UserService.findByEmail(result.email)
        if (user) {
            return user;
        }
        return null as any
    }
}
export const Auth = new AuthService()