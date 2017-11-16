import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { ItoDoModel } from './ito-do-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  ToDoAry: ItoDoModel[] = [];

  Completed: string = '';

  FilterAction: string = 'All';

  IsAllChecked: boolean = false;

  constructor(private DataSvc:DataService){

  }

  ngOnInit() {
    this.DataSvc.GetToDoList()
        .subscribe(data => {
          this.ToDoAry = data;
        });
  }

  UpdateToDoItem(ToDoItem){
    // console.log(ToDoItem);
    this.DataSvc.UpdateToDo(ToDoItem).subscribe();
  }

  SetInputValue($event) {
    // this.ToDoAry.push($event);
    let oToDo = <ItoDoModel>{};
    // oToDo.ID = this.ToDoAry.length + 1;
    oToDo.Name = $event;
    oToDo.IsCompleted = false;

    this.DataSvc.AddToDo(oToDo)
        .subscribe(data => {
          // this.ToDoAry = [...this.ToDoAry, data];
          this.ToDoAry = this.ToDoAry.concat(oToDo);
        });

    // this.ToDoAry.push(oToDo);//ToDoAry 沒參考到新的記憶體(after concat)，需要變成 this.ToDoAry = this.ToDoAry.concat($event);
    // this.ToDoAry.concat($event);//ToDoAry 沒參考到新的記憶體(after concat)，需要變成 this.ToDoAry = this.ToDoAry.concat($event);
    // this.ToDoAry = this.ToDoAry.concat($event);
  }

  ClearCompletedEvent() {
    this.ToDoAry = this.ToDoAry.filter(f => !f.IsCompleted);
  }

  ChangeFilterEvent($event) {
    this.FilterAction = $event;
  }

  GetCallback(data) {
    console.log(data);
  }

  ChangeAllChecked() {
    this.ToDoAry.forEach(item => {
      item.IsCompleted = this.IsAllChecked;
      this.UpdateToDoItem(item);
    });
  }

  DeleteToDoItem(ToDoItem){
    this.DataSvc.DeleteToDo(ToDoItem.id)
        .subscribe(data => {
          // console.log(data);
          // this.ToDoAry = this.ToDoAry.filter(item => item !== ToDoItem);
        });

    // this.ToDoAry = this.ToDoAry.filter(f => f !== ToDoItem);
  }

  UpdateToDoItem2(){
    let ToDoItem = <ItoDoModel>{};
    ToDoItem.id = 4;
    ToDoItem.Name = 'test';
    ToDoItem.IsCompleted = true;

    this.DataSvc.UpdateToDo(ToDoItem)
    .subscribe(data => {
      console.log(data);
      debugger;
    });
  }


}
