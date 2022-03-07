import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsResolver } from './animals.resolver';

@Module({
  providers: [AnimalsResolver, AnimalsService]
})
export class AnimalsModule {}
