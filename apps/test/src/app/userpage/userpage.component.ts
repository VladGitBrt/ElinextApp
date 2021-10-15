import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@elinext/api-interfaces';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'elinext-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss'],
})
export class UserpageComponent implements OnInit {
  routeUser!: User;
  constructor(
    private route: ActivatedRoute,
    private users: DataServiceService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const ID = +params.id;
      this.get(ID);
    });
  }
  get(id: number) {
    this.users.getUsers().subscribe((userArr) => {
      userArr.forEach((user) => {
        if (user.id === id) {
          this.routeUser = user;
          console.log(user);
        }
      });
    });
  }
}
