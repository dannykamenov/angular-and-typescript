import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {

  transform(dateString: string): string {
    return dateString.replace('T', ' ').replace('Z', '').substring(0, dateString.length - 5);
  }

}
