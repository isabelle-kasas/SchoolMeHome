import {User} from './User';
import {Subject} from './Subject';
import {Promo} from './Promo';
import { Field, InputType, ObjectType } from 'type-graphql';
import { prop } from '@typegoose/typegoose';
@ObjectType('UserType')
@InputType('UserInput')
export class Student extends User {
    @Field()
    @prop()
    subject!: Subject[];
    
    @Field()
    @prop()
    promo!: Promo[];
}