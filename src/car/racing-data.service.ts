import {CARPARTS} from './mocks';
import {Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {CarParts} from './car-parts';


@Injectable()
export class  RacingDataService {
  constructor(private http: Http){}
  getCarParts() {
    return this.http.get('app/car-parts.json').map(response => <CarParts[]>response.json().data);
  }
}
