import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CrocodilesService } from './crocodiles.service';
import { Crocodile } from './entities/crocodile.entity';
import { CreateCrocodileInput } from './dto/create-crocodile.input';
import { UpdateCrocodileInput } from './dto/update-crocodile.input';

@Resolver(() => Crocodile)
export class CrocodilesResolver {
  constructor(private readonly crocodilesService: CrocodilesService) {}

  @Mutation(() => Crocodile)
  createCrocodile(
    @Args('createCrocodileInput') createCrocodileInput: CreateCrocodileInput,
  ) {
    return this.crocodilesService.create(createCrocodileInput);
  }

  @Query(() => [Crocodile], { name: 'crocodiles' })
  findAll() {
    return this.crocodilesService.findAll();
  }

  @Query(() => Crocodile, { name: 'crocodile' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.crocodilesService.findOne(id);
  }

  @Mutation(() => Crocodile)
  updateCrocodile(
    @Args('updateCrocodileInput') updateCrocodileInput: UpdateCrocodileInput,
  ) {
    return this.crocodilesService.update(
      updateCrocodileInput.id,
      updateCrocodileInput,
    );
  }

  @Mutation(() => Crocodile)
  removeCrocodile(@Args('id', { type: () => Int }) id: number) {
    return this.crocodilesService.remove(id);
  }
}
