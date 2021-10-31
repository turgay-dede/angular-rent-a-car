import { CarImage } from './../../models/carImage';
import { CarImageService } from './../../services/car-image.service';
import { Car } from './../../models/car';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  providers: [CarService,CarImageService],
})
export class CarDetailComponent implements OnInit {
  constructor(
    private carService: CarService,
    private carImageService : CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}
  car: Car;
  carImages : CarImage[]
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarDetail(params['id']);
        this.getCarImagesByCar(params["id"])
      }
    });
  }
  getCarDetail(id: number) {
    this.carService.getCarByDetail(id).subscribe((response) => {
      this.car = response.data;
    });
  }

  getCarImagesByCar(carId:number){
    this.carImageService.getCarImagesByCar(carId).subscribe(response => {
      this.carImages = response.data
      console.log(response)
    })
  }

  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }
}
