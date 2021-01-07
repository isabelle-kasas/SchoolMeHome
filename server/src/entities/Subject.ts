import { prop } from "@typegoose/typegoose";
import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType('SubjectType')
@InputType('SubjectInput')
export class Subject {
  @Field()
  @prop()
  name!: string;
}