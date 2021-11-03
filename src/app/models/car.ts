import { CarImage } from './carImage';
export interface Car {
  id: number;
  carName: string;
  brandName: string;
  colorName: string;
  dailyPrice: number;
  modelYear: string;
  description: string;
  carImage:string
}
