import { RentalResponseModel } from './../models/rentalResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RentalService {
  apiUrl = 'https://localhost:44353/api/rentals';

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<RentalResponseModel> {
    return this.httpClient.get<RentalResponseModel>(this.apiUrl + '/getall');
  }
}
