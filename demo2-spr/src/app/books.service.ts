import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
 private apiUrl =" https://jsonplaceholder.typicode.com/users"
  constructor(private http:HttpClient) { }

  getBooks() {
    return this.http.get(this.apiUrl);
  }
  getBook(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);


  }
}
