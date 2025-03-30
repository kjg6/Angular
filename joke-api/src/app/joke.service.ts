import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private url = 'https://v2.jokeapi.dev/joke/Any?type=single';

  constructor(private http:HttpClient) { }
  getJokes():Observable<any>{
    return this.http.get(this.url);
  }

}
