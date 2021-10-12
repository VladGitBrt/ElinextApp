import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { User } from '@elinext/api-interfaces';

@Component({
  selector: 'elinext-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() user: User[] = [];
  @Input() Users: User[] = [];
  constructor(private dataService: DataServiceService) {}
  ngOnInit(): void {
    this.dataService.getUsers().subscribe((data) => {
      this.Users = data;
    });
  }
}
