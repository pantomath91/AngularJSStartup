import {Component} from '@angular/core';
import {p} from '@angular/core/src/render3';

@Component({
  selector: 'app-ng',
  template : '<h1> {{ title }} </h1><ul><li *ngFor = "let carPart of carParts"><h2> {{ carPart.name }}</h2><p> {{ carPart.description }}</p><p>{{carPart.price | currency : 'EUR'}}</p><p *ng-if='carPart.inStock > 0'>{{cardPart.inStock}} in <Stock></Stock> </p><p *ng-if='carPart.inStock === 0'>Out of Stock</p></li></ul><car-parts></car-parts>'});

export class AppComponent {
  title: 'Ultra Racing';

}

