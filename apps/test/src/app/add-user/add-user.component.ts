import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'elinext-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userInfoGroup!: FormGroup;
  @Output() updateUsers = new EventEmitter();
  @Output() closeWindow = new EventEmitter();
  constructor(private dataService: DataServiceService) {}
  ngOnInit(): void {
    this.userInfoGroup = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
      age: new FormControl(''),
      info: new FormControl(''),
      hobby: new FormControl(''),
    });
    console.log(this.userInfoGroup);
  }
  addUser() {
    const NEWUSER = this.userInfoGroup.value;
    if (
      NEWUSER.name == '' ||
      NEWUSER.password == '' ||
      NEWUSER.age == '' ||
      NEWUSER.info == '' ||
      NEWUSER.hobby == ''
    ) {
      alert('Fill all inputs to add new User');
    } else {
      this.dataService
        .addUser({
          name: NEWUSER.name,
          password: NEWUSER.password,
          age: NEWUSER.age,
          info: NEWUSER.info,
          hobby: NEWUSER.hobby,
        })
        .subscribe((data) => {
          this.updateUsers.emit(data);
        });
    }
  }
  closeWind() {
    this.closeWindow.emit(false);
  }
}
