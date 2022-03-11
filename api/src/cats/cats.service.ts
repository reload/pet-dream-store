import { Injectable } from '@nestjs/common';
import { AnimalInterface } from 'src/types';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private loadCat(): Promise<Cat> {
    return new Promise(function (resolve, reject) {
      return setTimeout(() => {
        const cat = new Cat();
        cat.type = 'Bengal Cat';
        cat.name = 'Allan';
        cat.img = 'http://localhost:3001/images/bengal.jpg';
        resolve(cat);
      }, 3000);
    });
  }

  findOne(id: number): Promise<Cat> {
    return this.loadCat();
  }

  findAll(): Cat[] {
    const cat_one = new Cat();
    cat_one.type = 'Bengal Cat';
    cat_one.animal = 'cat';
    cat_one.name = 'Allan';
    cat_one.img = 'http://localhost:3001/images/bengal.jpg';
    cat_one.description = `This is a text about Allan, the Bengal Cat that is definitely not made up and we love him so very much. That's why it breaks our heart that he has found an owner.`;
    cat_one.size = 0.5;
    cat_one.weigth = 5;

    const cat_two = new Cat();
    cat_two.type = 'Persian Cat';
    cat_two.animal = 'cat';
    cat_two.name = 'Mr. Lumps';
    cat_two.img = 'http://localhost:3001/images/siamese.jpeg';
    cat_two.description = `Lorem ipsum never give up`;
    cat_two.size = 0.25;
    cat_two.weigth = 14;

    const cat_three = new Cat();
    cat_three.type = 'Maine Coon';
    cat_three.animal = 'cat';
    cat_three.name = 'King';
    cat_three.img = 'http://localhost:3001/images/fluffy.jpeg';
    cat_three.description = `Lorem ipsum never give up. But now there is a LITTLE bit more text here, yeah.`;
    cat_three.size = 0.22;
    cat_three.weigth = 3;

    const cat_four = new Cat();
    cat_four.type = 'Bengal Cat';
    cat_four.animal = 'cat';
    cat_four.name = 'Allan';
    cat_four.img = 'http://localhost:3001/images/persian_2.jpeg';
    cat_four.description = `This is a text about Allan, the Bengal Cat that is definitely not made up and we love him so very much. That's why it breaks our heart that he has found an owner.`;
    cat_one.size = 0.5;
    cat_one.weigth = 5;

    const cat_five = new Cat();
    cat_five.type = 'Persian Cat';
    cat_five.animal = 'cat';
    cat_five.name = 'Mr. Lumps';
    cat_five.img = 'http://localhost:3001/images/maine.jpeg';
    cat_five.description = `Lorem ipsum never give up`;
    cat_five.size = 0.25;
    cat_five.weigth = 14;

    const cat_six = new Cat();
    cat_six.type = 'Maine Coon';
    cat_six.animal = 'cat';
    cat_six.name = 'King';
    cat_six.img = 'http://localhost:3001/images/maine_2.jpeg';
    cat_six.description = `Lorem ipsum never give up. But now there is a LITTLE bit more text here, yeah.`;
    cat_six.size = 0.22;
    cat_six.weigth = 3;

    return [cat_one, cat_two, cat_three, cat_five, cat_five, cat_six];
  }
}
