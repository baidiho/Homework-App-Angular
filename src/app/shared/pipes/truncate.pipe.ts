import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, lenght: number = 100): string {
    return value.length <= lenght ? value : value.slice(0, lenght) + `...`;
  }
}
