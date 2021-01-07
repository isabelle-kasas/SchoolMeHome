import { prop } from "@typegoose/typegoose";
import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType('UserType')
@InputType('UserInput')
export  class Lesson {
    @Field()
    @prop()
    name!: string;
    
    @Field()
    @prop()
    start!: Date;

    @Field()
    @prop()
    end!: Date;
}