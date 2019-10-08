import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor'
})
export class StatusColorPipe implements PipeTransform {

  transform(value: boolean): string {
    if (value) {
      return 'red';
    }

    return 'green';
  }

}
