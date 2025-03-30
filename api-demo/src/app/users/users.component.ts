import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
 public users:any =[];
 constructor(private userService:UserService){}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data)=>{
      this.users=data;})
    }
  }


