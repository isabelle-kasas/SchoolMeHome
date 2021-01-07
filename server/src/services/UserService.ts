import * as argon from 'argon2'
import { User, UserUpdate } from '../entities/User';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { getModelForClass } from '@typegoose/typegoose';
import { Auth } from './AuthService';



export class UserServiceClass{    
    @Query(() => User)
    public async findByEmail(email: string){
        const model = getModelForClass(User);
        return await model.findOne({email});
    }
    @Query(()=> User)
    public async findById(id: string){
        const model = getModelForClass(User);
        return await model.findById(id);
    }
    
    @Mutation(() => User)
    public async signUp (newUser:User): Promise<User> {   
        const model = getModelForClass(User);
        newUser.password = await argon.hash(newUser.password);
        return await model.create(newUser);    
    }
    
    @Mutation(() => User, {nullable : true})
    public async updateOne(@Arg('id') id: string,@Arg('data') data : UserUpdate){
        const user = await UserService.findById(id);
        Object.assign(user, data);
        return await user.save();
        }

    @Mutation(() => User, {nullable : true})
    public async lostPassword(@Arg('email') email : string): Promise<User>{
        const model = getModelForClass(User);
        const user = await Auth.passwordLost(email);
        const userUpdating = await model.findOneAndUpdate(
            {email : email}, 
            {user: user.user, token : user.token}, 
            {new: true});
        if (userUpdating) {
                return (userUpdating);
            }
        return null as any;
        }
}
export const UserService = new UserServiceClass();