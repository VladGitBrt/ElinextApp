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
  addUser(userBody: any) {
    return this.http.post<User>('/api/adduser', userBody);
  }
  deleteUser(id: number) {
    return this.http.get<User>(`/api/deleteuser/${id}`);
  }
}
