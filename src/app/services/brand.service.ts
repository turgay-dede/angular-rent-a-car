import { BrandResponseModel } from './../models/brandResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BrandService {
  apiUrl="https://localhost:44353/api/brands"

  constructor(private httpClient : HttpClient) { }

  getBrands():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.apiUrl+"/getall")
  }
}
