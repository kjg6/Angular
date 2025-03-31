import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { User, UserService } from '../user.service'; // Assuming you have a User model defined in user.model.ts
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  constructor(private userService:UserService) { }
  users: User[] = []
  ngOnInit(): void {
  this.users = this.userService.getUsers();    
  }

}
