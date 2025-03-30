import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
// import { NgFor } from '@angular/common';
// import { Joke } from './joke.model';
@Component({
  selector: 'app-joke',
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent implements OnInit {
  joke: any = {};

  constructor(private jokeService:JokeService) { }

  ngOnInit() {
    this.jokeService.getJokes().subscribe((data) => {
      this.joke = data;
    });
  }

}
