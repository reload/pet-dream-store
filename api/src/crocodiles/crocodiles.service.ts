import { Injectable } from '@nestjs/common';
import { CreateCrocodileInput } from './dto/create-crocodile.input';
import { UpdateCrocodileInput } from './dto/update-crocodile.input';
import crocData from './crocodiles.json';

@Injectable()
export class CrocodilesService {
  create(createCrocodileInput: CreateCrocodileInput) {
    return 'This action adds a new crocodile';
  }

  findAll() {
    return [
      {
        type: 'Big croc',
        name: 'Steven',
        img: 'http://localhost:3001/images/big.jpeg',
      },
      {
        type: 'Smol croc',
        name: 'Pam',
        img: 'http://localhost:3001/images/smol.jpeg',
      },
      {
        type: 'Long croc',
        name: 'Line',
        img: 'http://localhost:3001/images/long.jpeg',
      },
    ];
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
