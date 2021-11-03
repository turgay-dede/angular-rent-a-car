import { Color } from './../models/color';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: Color[], colorFilterText: string): Color[] {
    colorFilterText = colorFilterText ? colorFilterText.toLocaleLowerCase() : ""
    return colorFilterText ? value.filter(c=>c.colorName.toLocaleLowerCase().indexOf(colorFilterText)!==-1) :value
  }

}
