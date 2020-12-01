import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyDigit'
})
export class OnlyDigitPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toString().replace(/\D/, '');
  }
}
