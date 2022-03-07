import { Injectable } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { CrocodilesService } from 'src/crocodiles/crocodiles.service';
import { CreateAnimalInput } from './dto/create-animal.input';
import { UpdateAnimalInput } from './dto/update-animal.input';

@Injectable()
export class AnimalsService {

  findAll() {
    return [];
  }

}
