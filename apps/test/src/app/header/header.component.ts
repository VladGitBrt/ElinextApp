import { Component, Input } from '@angular/core';
import { User } from '@elinext/api-interfaces';

@Component({
  selector: 'elinext-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user: User[] = [];
  constructor() {}
}
