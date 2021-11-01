import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';

@Injectable()
export class CarImageService {
  apiUrl="https://localhost:44353/api/carimages"

  constructor(private httpClient : HttpClient) { }

  getCarImagesByCar(carId:number):Observable<ListResponseModel<CarImage>>{
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl+"/getbycarid?carId="+carId)
  }
}
