export interface User {
  id: number;
  name: string;
  email: string;}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private Users: User[] = [
    {
      id: 1,
      name: 'John',
      email: '1234@Gmail'
    }
    , {
      id: 2,
      name: 'Jane',
      email: '1234@Gmail'
    }, {
      id: 3,
      name: 'Jack',
      email: '1234@Gmail'
    }
  ]

  constructor() { }

  getUsers():User[] {
    return this.Users;
  }
  getUserbyId(id: number): User | undefined {
    return this.Users.find(user => user.id === id);
  }
}
