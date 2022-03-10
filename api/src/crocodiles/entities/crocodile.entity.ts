import { ObjectType, Field, Int } from '@nestjs/graphql';
import { AnimalInterface } from 'src/types';

export type crocodileType =
  | 'Nile Crocodile'
  | 'Marsh Crocodile'
  | 'Orinoco Crocodile';

@ObjectType()
export class Crocodile implements AnimalInterface {
  @Field({ description: 'The type of croc' })
  type: crocodileType;
  @Field({ description: 'The name of the croc' })
  name: string;
  @Field({ description: 'The image of the croc' })
  img: string;
  @Field({ description: 'The description of the croc' })
  description: string;
  @Field({ description: 'The size of the croc' })
  size: number;
  @Field({ description: 'The weigth of the croc' })
  weigth: number;
}
