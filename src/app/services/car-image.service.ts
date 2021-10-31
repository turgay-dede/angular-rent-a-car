import { CarImagesResponseModel } from './../models/carImagesResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CarImageService {
  apiUrl="https://localhost:44353/api/carimages"

  constructor(private httpClient : HttpClient) { }

  getCarImagesByCar(carId:number):Observable<CarImagesResponseModel>{
    return this.httpClient.get<CarImagesResponseModel>(this.apiUrl+"/getbycarid?carId="+carId)
  }
}
