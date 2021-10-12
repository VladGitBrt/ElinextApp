import { Component } from '@angular/core';
import { User } from '@elinext/api-interfaces';

@Component({
  selector: 'elinext-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  logStatus = false;
  currentUser: User[] = [];
  Users: User[] = [];
  loading = false;
  constructor() {}
  logStat(bool: boolean): void {
    this.logStatus = bool;
  }
  registratedUser(user: User[]) {
    this.currentUser = user;
  }
}
