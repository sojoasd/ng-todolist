import { ItoDoModel } from './ito-do-model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ItoDoModel[], type?: string): any {
    switch(type)
    {
      case 'Active':
        return value.filter(f=> !f.IsCompleted);

      case 'Completed':
        return value.filter(f=> f.IsCompleted);

      default:
        return value;
    }
  }

}
