import {  Component } from '@angular/core';
import { CarParts } from './car-parts';
import { CARPARTS } from './mocks';
import {RacingDataService} from './racing-data.service';

  @Component({
  selector: 'app-car-parts',
  templateUrl : 'C:\\Users\\slohani\\WebstormProjects\untitled1\\src\\app\\car-parts.component.html',
  styleUrls : ['C:\\Users\\slohani\\WebstormProjects\untitled1\\src\\app\\car-parts.component.css']
})

export class CarPartsComponent {
  carParts: CarParts[];

  constructor(private racingDataService: RacingDataService) {};

// we have moved data to mocks.ts for better maintainability of the code
  ngOnInit() {
    this.carParts = this.racingDataService.getCarParts().subscribe(carParts => this.carParts = carParts);
  }

  upQuantity(carPart) {
    alert('You called upQuantity');
    if (carPart.quantity < carPart.inStock) {carPart.quantity++; }
  }

  downQuantity(carPart) {
    alert('You called upQuantity');
    if (carPart.quantity !== 0) {carPart.quantity--; }
  }

  totalCarParts() {
    let sum = 0;
    if ( Array.isArray(this.carParts)) {
    for (const carPart of this.carParts) {
      sum += carPart.inStock;
    }}
    return sum;
  }
}
