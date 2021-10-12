import { Injectable } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { User } from '@elinext/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Users: User[] = [];
  userFound: User[] = [];
  constructor(private dataService: DataServiceService) {}
  loginRequest(name: string, password: string): User[] {
    this.dataService.getUsers().subscribe((data) => {
      this.Users = data;
      this.Users.forEach((user) => {
        if (user.name === name && user.password === password) {
          this.userFound.push(user);
        }
      });
    });
    return this.userFound;
  }
}
