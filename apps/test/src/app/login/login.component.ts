import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '@elinext/api-interfaces';
@Component({
  selector: 'elinext-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() isLogged = new EventEmitter();
  @Output() userFound = new EventEmitter();
  loginState = false;
  constructor(private authService: AuthService) {}
  Users: User[] = [];
  name = new FormControl('');
  password = new FormControl('');
  async isLoggedIn() {
    const USER = await this.authService.loginRequest(
      this.name.value,
      this.password.value
    );
    this.userFound.emit(USER);
    setTimeout(() => {
      if (USER.length === 0 || USER.length > 1) {
        alert('No User found!');
      } else {
        this.isLogged.emit(true);
      }
    }, 1000);
  }
}
