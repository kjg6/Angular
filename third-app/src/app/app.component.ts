import { Component } from '@angular/core';
import { ComputerListComponent } from "./computer-list/computer-list.component";


@Component({
  selector: 'app-root',
  imports: [ComputerListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'third-app';
}
