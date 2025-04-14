import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../books.service';

@Component({
  selector: 'app-bookslist',
  imports: [],
  templateUrl: './bookslist.component.html',
  styleUrl: './bookslist.component.css'
})
export class BookslistComponent implements OnInit {
  users: any = [];
  constructor(private booksService: BooksService) {}
  ngOnInit(): void {
    this.booksService.getBooks().subscribe((data) => {
      this.users = data;
    });

  }


}
