import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { User } from '@elinext/api-interfaces';

@Component({
  selector: 'elinext-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() Users: User[] = [];
  @Input() user: User[] = [];
  logUser: User[] = [];
  addBtn = false;
  constructor(private dataService: DataServiceService) {}
  ngOnInit(): void {
    this.dataService.getUsers().subscribe((data) => {
      this.Users = data;
    });
    this.logUser = this.user;
  }
  addUserBtn() {
    this.addBtn = !this.addBtn;
    console.log(this.addBtn);
  }
  updateUsers(users: User[]) {
    this.Users = users;
  }
  deleteUser(id: number) {
    this.dataService.deleteUser(id);
  }
  closeWindow(event: boolean) {
    this.addBtn = event;
  }
}
