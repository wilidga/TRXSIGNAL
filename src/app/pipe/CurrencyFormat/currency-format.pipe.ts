import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: any, defecto: number = 0.0): any {

        value =  (value / Math.pow(10, defecto));

      // return (value) ? value :  defecto;
      return value;
  }

}
