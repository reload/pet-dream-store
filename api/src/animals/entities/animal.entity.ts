import { ObjectType, Field, Int } from '@nestjs/graphql';
import { catType } from 'src/cats/entities/cat.entity';
import { crocodileType } from 'src/crocodiles/entities/crocodile.entity';
import { AnimalInterface } from 'src/types';

@ObjectType()
export class Animal implements AnimalInterface {
  @Field({ description: 'The type of animal' })
  type: catType | crocodileType;
  @Field({ description: 'The name of the animal' })
  name: string;
  @Field({ description: 'The image of the animal' })
  img: string;
}
