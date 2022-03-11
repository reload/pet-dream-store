import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnimalsService } from './animals.service';
import { Animal } from './entities/animal.entity';
import { CreateAnimalInput } from './dto/create-animal.input';
import { UpdateAnimalInput } from './dto/update-animal.input';
import { AnimalInterface } from 'src/types';
import { CatsService } from 'src/cats/cats.service';
import { CrocodilesService } from 'src/crocodiles/crocodiles.service';

@Resolver(() => Animal)
export class AnimalsResolver {
  constructor(
    private catService: CatsService,
    private crocodileService: CrocodilesService,
  ) {}

  @Query(() => [Animal], { name: 'animals', nullable: true })
  findAll(): AnimalInterface[] {
    return [
      ...this.catService.findAll(),
      ...this.crocodileService.findAll(),
    ];
  }
}
