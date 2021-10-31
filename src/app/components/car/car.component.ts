import { Car } from './../../models/car';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarService],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService,
    private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]) {
        this.getCarsByColor(params["colorId"])
      }else {
        this.getCars()
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data
    })

  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByBrand(colorId).subscribe(response => {
      this.cars = response.data
    })

  }
}
