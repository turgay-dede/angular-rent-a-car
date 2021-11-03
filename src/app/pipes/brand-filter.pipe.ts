import { Brand } from './../models/brand';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandFilter',
})
export class BrandFilterPipe implements PipeTransform {
  transform(value: Brand[], brandFilterText: string): Brand[] {
    brandFilterText = brandFilterText? brandFilterText.toLocaleLowerCase(): '';
    return brandFilterText ? value.filter(b=>b.brandName.toLocaleLowerCase().indexOf(brandFilterText)!== -1):value
  }
}
