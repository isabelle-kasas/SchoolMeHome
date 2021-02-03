
import { Field, InputType, ObjectType } from "type-graphql";
import { prop } from "@typegoose/typegoose";
import { Slide } from "./Slide";
@ObjectType('UserType')
@InputType('UserInput')
export  class Promo {
    @Field()
    @prop()
    title: string;

    @Field()
    @prop()
    slides: Slide[];
}