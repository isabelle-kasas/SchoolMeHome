import { getModelForClass } from "@typegoose/typegoose";
import {Request, Response} from "express";
import { Arg } from "type-graphql";
import { Slide } from "../entities/Slide";

export class SlideController{
    public async createSlide(@Arg('data') data: Slide): Promise<Slide>{
        const model =  getModelForClass(Slide)
        return await model.create(data)
    }
}