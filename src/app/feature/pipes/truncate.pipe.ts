import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, lenght: number = 100): string {
    if (value.length <= lenght) {
      return value;
    } else {
      return value.slice(0, lenght) + `...`;
    }
  }
}
