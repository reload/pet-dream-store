import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Crocodile {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
