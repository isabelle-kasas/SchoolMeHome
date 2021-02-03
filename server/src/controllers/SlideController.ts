import { getModelForClass } from "@typegoose/typegoose";
import {Request, Response} from "express";
import { Arg, Resolver, Mutation, Query } from "type-graphql";
import { Slide } from "../entities/Slide";

@Resolver(() => Slide)
export class SlideController{

  @Mutation(() => Slide)
    public async createSlide(@Arg('data') data: Slide): Promise<Slide>{
      console.log(data)
        const model =  getModelForClass(Slide)
        console.log(await model.create(data))
        return await model.create(data)
    }

    @Query(() => Slide)
        public async findAll(id: number): Promise<Slide>{
            const model = getModelForClass(Slide);
            return await model.findOne({id});
        }


}