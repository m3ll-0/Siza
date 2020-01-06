import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabetical'
})
export class AlphabeticalPipe implements PipeTransform {

  transform(values: any[], ...args: any[]): any {
    return values.filter((item) => item.wheelchair);
  }

}
