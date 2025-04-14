import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { DynamicStyleDirective } from './dynamic-style.directive';
import { UnlessDirective } from './unless.directive';
import { FormsModule } from '@angular/forms';
import { ClikedColorDirective } from './cliked-color.directive';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HighlightDirective, DynamicStyleDirective, UnlessDirective,FormsModule,ClikedColorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isVisible:boolean = false;  
  title = 'Dyrektywy';
  color:string   = 'yellow';
}