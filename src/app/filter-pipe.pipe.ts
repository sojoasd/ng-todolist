import { Pipe, PipeTransform } from '@angular/core';
import { ItoDoModel } from './ito-do-model';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(ToDoList: ItoDoModel[], ToDoType?: string): ItoDoModel[] {
    switch(ToDoType)
    {
      case 'Active':
        return ToDoList.filter(item => !item.IsCompleted);

      case 'Completed':
        return ToDoList.filter(item => item.IsCompleted);

      default:
        return ToDoList;
    }
  }

}
