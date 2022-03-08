import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsResolver } from './animals.resolver';
import { CatsService } from 'src/cats/cats.service';
import { CrocodilesService } from 'src/crocodiles/crocodiles.service';

@Module({
  providers: [AnimalsResolver, CatsService, CrocodilesService]
})
export class AnimalsModule {}
