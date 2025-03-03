import {CommonModule} from '@angular/common';
import {Component } from '@angular/core';
import {ComputerService } from '../computer.service';
import { MessageService } from '../message.service';

export interface Computer {
  processor: string;
  memory: number;
  graphics: string;
  motherboard: string;
}

@Component({
  selector: 'app-computer-list',
  imports: [CommonModule],
  templateUrl: './computer-list.component.html',
  styleUrl: './computer-list.component.css'
})
export class ComputerListComponent {

  computerList: Computer[] = [];


  constructor(private computerService: ComputerService,private messageService: MessageService) {}
  ngOnInit(): void {
    this.getComputers();
  }
    selectedComputer?: Computer;

    onSelect(computer: Computer): void {
      this.selectedComputer = computer;
    }

    getComputers(): void {
      this.computerService.getComputers().subscribe(computer => this.computerList = computer);
    }
    
}
