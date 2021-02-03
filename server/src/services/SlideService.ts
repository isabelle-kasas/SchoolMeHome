// import * as argon from 'argon2'
// import { User } from '../entities/User';
// import { Arg, Mutation, Query, Resolver } from 'type-graphql';
// import { getModelForClass } from '@typegoose/typegoose';
// import { Slide } from '../entities/Slide';


// export class SlideServiceClass{
    
//     @Mutation(() => Slide)
//     public async createSlide (newSlide:Slide): Promise<Slide> {   
//         const model = getModelForClass(Slide);
//         console.log(newSlide)
//         return await model.create(newSlide);    
//     }

//       @Query(() => Slide)
//     public async findAll(id: number): Promise<Slide>{
//         const model = getModelForClass(Slide);
//         return await model.findOne({id});
//     }
// }
// export const SlideService = new SlideServiceClass();