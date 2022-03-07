import { ObjectType, Field } from '@nestjs/graphql';
import { AnimalInterface } from 'src/types';

export type catType = 'Persian Cat' | 'Maine Coon' | 'Bengal Cat';

@ObjectType()
export class Cat implements AnimalInterface {
  @Field({ description: 'The type of cat' })
  type: catType;
  @Field({ description: 'The name of the cat' })
  name: string;
  @Field({ description: 'The image of the cat' })
  img: string;
}
