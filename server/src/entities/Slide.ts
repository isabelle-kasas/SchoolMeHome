import { Field, InputType, ObjectType } from 'type-graphql';

@ObjectType('SlideType')
@InputType('SlideInput')
export class Slide {
  @Field()
  title: string;
  @Field()
  order: number;
  @Field()
  htmlContent: string;
}