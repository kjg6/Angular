import { Injectable } from '@angular/core';
import { Computer } from './computer-list/computer-list.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
   computerList: Computer[] = [
      {
        processor: 'Intel Core i7',
        memory: 16,
        graphics: 'Nvidia GeForce GTX 1080',
        motherboard: 'ASUS Prime Z370-A'
      },
      {
        processor: 'AMD Ryzen 7',
        memory: 32,
        graphics: 'AMD Radeon RX 580',
        motherboard: 'Gigabyte GA-AB350M-D3H'
      },
      {
        processor: 'Intel Core i5',
        memory: 8,
        graphics: 'Nvidia GeForce GTX 1060',
        motherboard: 'MSI Z370-A Pro'
      },
      {
        processor: 'AMD Ryzen 3',
        memory: 16,
        graphics: 'AMD Radeon RX 570',
        motherboard: 'ASRock AB350 Pro4'
      },
      {
        processor: 'Intel Core i3',
        memory: 4,
        graphics: 'Nvidia GeForce GTX 1050',
        motherboard: 'ASUS Prime Z370-P'
      }
    ]
  messageService: any;

   
  getComputers(): Observable<Computer[]> {
    const computer = of(this.computerList);
    this.messageService.add('ComputerServiece: fetched heroes');
    return computer;
  
  }
}
