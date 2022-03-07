import { ObjectType, Field, Int } from '@nestjs/graphql';

//type crocType = 'Big' | 'Smol' | 'Long';

interface CrocInterface {
  type: string;
  name: string;
  img: string;
}

@ObjectType()
export class Crocodile implements CrocInterface {
  @Field({ description: 'The type of croc' })
  type: string;
  @Field({ description: 'The name of the croc' })
  name: string;
  @Field({ description: 'The image of the croc' })
  img: string;
}
