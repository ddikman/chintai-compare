import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yen'
})
export class YenPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value > 10000) {
      value = Math.round(value / 1000) / 10;
      return `${value}万円`;
    }
    return `${value}円`;
  }

}
