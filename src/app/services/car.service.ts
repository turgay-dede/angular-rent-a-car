import { CarResponseModel } from './../models/carResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CarService {
  apiUrl="https://localhost:44353/api/cars"

  constructor(private httpClient : HttpClient) { }

  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl+"/getall")
  }
}
