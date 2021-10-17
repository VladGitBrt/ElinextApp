import { Injectable } from '@nestjs/common';
import { Message, User } from '@elinext/api-interfaces';

@Injectable()
export class AppService {
  idCounter = 4;
  Users: User[] = [
    {
      id: 0,
      name: 'Bortnik Vladyslav',
      password: '1',
      isAdmin: true,
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aspernatur accusamus officiis doloremque odio fugit at repudiandae nam consectetur assumenda.',
      age: '25',
      hobby: 'Basketball',
    },
    {
      id: 1,
      name: 'John Dee',
      password: '2',
      isAdmin: false,
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aspernatur accusamus officiis doloremque odio fugit at repudiandae nam consectetur assumenda.',
      age: '22',
      hobby: 'FrontEnd',
    },
    {
      id: 2,
      name: 'Whilliam Shakespeare',
      password: '3',
      isAdmin: false,
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aspernatur accusamus officiis doloremque odio fugit at repudiandae nam consectetur assumenda.',
      age: '27',
      hobby: 'C++ Developer',
    },
    {
      id: 3,
      name: 't',
      password: 't',
      isAdmin: true,
      info: '1',
      age: '25',
      hobby: '1',
    },
  ];
  getUsers(): User[] {
    return this.Users;
  }
  applyUser(userObj) {
    const newUserObj: User = {
      id: this.idCounter,
      name: userObj.name,
      password: userObj.password,
      isAdmin: false,
      info: userObj.info,
      age: userObj.age,
      hobby: userObj.hobby,
    };
    this.idCounter++;
    this.Users.push(newUserObj);
    return this.Users;
  }
}
