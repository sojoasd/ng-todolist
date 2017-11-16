import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  TitleName:string = 'todos';

  Tips:string = 'What needs to be done?';
  Cols:Number = 2;
  myhint:string = "hello";

  InputValue:string = '';

  ToDoCounts:Number = 0;

  @Input('ToDoCounts')
  set ToDoCount(value){
    this.ToDoCounts = value;
  }
  // get ToDoCount(){
  //   return this.ToDoCounts;
  // }

  @Output()
  PassInputValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  SetInputAry($event:KeyboardEvent){
    this.PassInputValue.emit(this.InputValue);
    this.InputValue = '';
  }

}
