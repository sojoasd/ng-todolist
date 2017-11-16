import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
