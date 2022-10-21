import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'name':
        return 'Name'
      case 'expirationDate':
        return 'Expiration Date'
      case 'prescribedBy':
        return 'Prescribed By'
      default:
        return 'ERROR'
    }
  }

}
