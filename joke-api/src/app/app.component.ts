import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeComponent } from './joke/joke.component';

@Component({
  selector: 'app-root',
  imports: [JokeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'joke-api';
}
