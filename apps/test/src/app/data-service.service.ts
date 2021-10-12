import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@elinext/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  test = 'test';
  constructor(private readonly http: HttpClient) {}
  getUsers() {
    return this.http.get<User[]>('/api/users');
  }
}
