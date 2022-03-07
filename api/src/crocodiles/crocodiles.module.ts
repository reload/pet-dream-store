import { Module } from '@nestjs/common';
import { CrocodilesService } from './crocodiles.service';
import { CrocodilesResolver } from './crocodiles.resolver';

@Module({
  providers: [CrocodilesResolver, CrocodilesService],
})
export class CrocodilesModule {}
