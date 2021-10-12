import { Injectable } from '@nestjs/common';
import { Message, User } from '@elinext/api-interfaces';

@Injectable()
export class AppService {
  idCounter = 2;
  Users: User[] = [
    { id: 0, name: 'Vlad', password: '1', isAdmin: true },
    { id: 1, name: 'Vlad1', password: '2', isAdmin: false },
    { id: 2, name: 'Max', password: '3', isAdmin: false },
  ];
  getUsers(): User[] {
    return this.Users;
  }
  applyUser(userObj) {
    const newUserObj: User = {
      id: this.idCounter,
      name: userObj.name,
      password: userObj.password,
      isAdmin: userObj.isAdmin,
    };
    this.idCounter++;
    this.Users.push(newUserObj);
    return this.Users;
  }
}
