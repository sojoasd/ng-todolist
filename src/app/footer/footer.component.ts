import { ItoDoModel } from './../ito-do-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _toDoAry:ItoDoModel[] = [];
  IsTooMore:boolean = false;
  FilterAction:string = 'All';

  @Input('ToDos')
  set ToDoAry(value){
    this._toDoAry = value;
    this.IsTooMore = this.ToDoAry.length > 3;
  }
  get ToDoAry(){
    return this._toDoAry;
  }

  @Output()
  TriggerClearCompletedEvent = new EventEmitter();

  @Output()
  TriggerFilterEvent = new EventEmitter<string>();

  @Output()
  TriggerFilterChangeType = new EventEmitter<string>();

  @Output()
  TriggerTestActionEvent = new EventEmitter<ItoDoModel>();

  constructor() { }

  ngOnInit() {
  }

  TestClear(callback){
    // console.log(this.ToDoAry.filter(f=>f.IsCompleted).map(m=>m.ID));
    callback(this.ToDoAry.filter(f=>f.IsCompleted).map(m=>m.id));
  }

  ClearCompleted(){
    this.TriggerClearCompletedEvent.emit();
  }

  ChangeFilterAction(FilterValue){
    this.FilterAction = FilterValue;
    this.TriggerFilterEvent.emit(FilterValue);
  }

  TestActionFunc(){
    this.TriggerTestActionEvent.emit(this._toDoAry[0]);
  }

  ChangeFilterType(FilterValue){
    this.FilterAction = FilterValue;
    this.TriggerFilterChangeType.emit(this.FilterAction);
  }

}
