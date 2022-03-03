import { CreateCrocodileInput } from './create-crocodile.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCrocodileInput extends PartialType(CreateCrocodileInput) {
  @Field(() => Int)
  id: number;
}
