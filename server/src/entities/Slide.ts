import { Field, InputType, ObjectType } from 'type-graphql';

@ObjectType('SlideType')
@InputType('SlideInput')
export class Slide {
  @Field({ nullable: true })
  title!: string;
  @Field({ nullable: true })
  order!: number;
  @Field({ nullable: true })
  htmlContent: string;
}