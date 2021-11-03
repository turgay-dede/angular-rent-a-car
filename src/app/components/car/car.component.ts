import { CarImage } from './../../models/carImage';
import { CarImageService } from './../../services/car-image.service';
import { Car } from './../../models/car';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarService, CarImageService],
})
export class CarComponent implements OnInit {
  cars: Car[]
  images : CarImage[]
  path:string
  filterText=""
  

  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandName']) {
        this.getCarsByBrand(params['brandName']);
      } else if (params['colorName']) {
        this.getCarsByColor(params['colorName']);
      } else {
        this.getCars();     
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByBrand(brandName: string) {
    this.carService.getCarsByBrand(brandName).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByColor(colorName: string) {
    this.carService.getCarsByColor(colorName).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarImages(carId:number){
    this.carImageService.getCarImagesByCar(carId).subscribe(response => {
      this.images = response.data
    })
    
  }

  getImagePath(carId:number):string{
    this.carService.getCarByDetail(carId).subscribe(response => {
      if(response.data.carImage === null){
       this.path= response.data.carImage="https://www.emmioglumermer.com.tr/wp-content/uploads/2018/11/urun-resim-yok.png"
      }
      this.path = response.data.carImage
      
    })
    return "https://localhost:44353/"+this.path

  }

}
