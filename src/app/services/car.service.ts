import { CarDetailResponseModel } from './../models/carDetailResponseModel';
import { CarDetailComponent } from './../components/car-detail/car-detail.component';
import { Car } from './../models/car';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CarService {
  apiUrl = 'https://localhost:44353/api/cars';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl + '/getall');
  }  

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+"/getbybrandid?id="+brandId)
  }

  getCarByDetail(id:number):Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl+"/getbydetail?id="+id)
  }
}