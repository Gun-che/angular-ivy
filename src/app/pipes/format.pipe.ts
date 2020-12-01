import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    let result = '';
    let arrLetter: string[];

    if (typeof value === 'number') {
      arrLetter = Math.floor(value).toString().split('').reverse();

    } else if (typeof value === 'string') {
      arrLetter = value.replace(/\D/g, '').split('').reverse();

      if (!arrLetter.length) {
        return '';
      }

    } else {
      throw Error('Invalid value');
    }

    arrLetter.forEach((letter, index ) => {
      result += letter;
      if ((index + 1) % 3 === 0 && index !== arrLetter.length - 1) {
        result += ' ';
      }
    });
    result = result.split('').reverse().join('');
    return result;
  }
}
