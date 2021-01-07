import {Subject} from "./Subject";
import {Student} from "./Student";
import { Field, InputType, ObjectType } from "type-graphql";
import { prop } from "@typegoose/typegoose";
@ObjectType('UserType')
@InputType('UserInput')
export  class Promo {
    @Field()
    @prop()
    name!: string;

    @Field()
    @prop()
    students!: Student[];

    @Field()
    @prop()
    subject !: Subject[];
}
