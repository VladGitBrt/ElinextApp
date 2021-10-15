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
  constructor(private dataService: DataServiceService) {}
  ngOnInit(): void {
    this.dataService.getUsers().subscribe((data) => {
      this.Users = data;
    });
    this.logUser = this.user;
  }
}
