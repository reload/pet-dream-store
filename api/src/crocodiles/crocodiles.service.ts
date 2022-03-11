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
        animal: 'crocodile',
        name: 'Steven',
        img: 'http://localhost:3001/images/big.jpeg',
        description:
          'Steven was found washed up ashore in the amazon forest, and we gave him home.',
        size: 10,
        weigth: 500,
      },
      {
        type: 'Smol croc',
        animal: 'crocodile',
        name: 'Pam',
        img: 'http://localhost:3001/images/smol.jpeg',
        description:
          'Pam is a beautiful smol croc. She may not be big, but she sure packs a punch!',
        size: 0.5,
        weigth: 20,
      },
      {
        type: 'Long croc',
        animal: 'crocodile',
        name: 'Line',
        img: 'http://localhost:3001/images/long.jpeg',
        description:
          'Line is our youngest croc. Her family bloodline is extensive and she is a direct descendant of some of the most famous crocs.',
        size: 3,
        weigth: 75,
      },
      {
        type: 'Smol croc',
        animal: 'crocodile',
        name: 'Carson',
        img: 'http://localhost:3001/images/croc.webp',
        description: 'Carson is a good boy.',
        size: 3,
        weigth: 75,
      },
      {
        type: 'Long croc',
        animal: 'crocodile',
        name: 'Paul',
        img: 'http://localhost:3001/images/croc_2.webp',
        description:
          'Paul is a working crocodile. He is the supreme supermodel of the croc world.',
        size: 1.4,
        weigth: 57,
      },
      {
        type: 'Smol croc',
        animal: 'crocodile',
        name: 'Carson',
        img: 'http://localhost:3001/images/croc.webp',
        description: 'Carson is a good boy.',
        size: 3,
        weigth: 75,
      },
      {
        type: 'Long croc',
        animal: 'crocodile',
        name: 'Paul',
        img: 'http://localhost:3001/images/long.jpeg',
        description:
          'Paul is a working crocodile. He is the supreme supermodel of the croc world.',
        size: 1.4,
        weigth: 57,
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
