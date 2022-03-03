import { Injectable } from '@nestjs/common';
import { CreateCrocodileInput } from './dto/create-crocodile.input';
import { UpdateCrocodileInput } from './dto/update-crocodile.input';

@Injectable()
export class CrocodilesService {
  create(createCrocodileInput: CreateCrocodileInput) {
    return 'This action adds a new crocodile';
  }

  findAll() {
    return `This action returns all crocodiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crocodile`;
  }

  update(id: number, updateCrocodileInput: UpdateCrocodileInput) {
    return `This action updates a #${id} crocodile`;
  }

  remove(id: number) {
    return `This action removes a #${id} crocodile`;
  }
}
