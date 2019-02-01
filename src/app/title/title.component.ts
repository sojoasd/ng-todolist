import { Component, OnInit, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { ItoDoModel } from '../ito-do-model';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

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
  subscription: Subscription;

  InputDom = document.getElementById('keypresstest');

  @Output()
  PassInputValue = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {
    // const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keypress')
    // .map(() => this.InputValue)
    // .debounceTime(1000)
    // .distinctUntilChanged();

    // eventStream.subscribe(input => {console.log(input);});
  }

  ngOnInit() {
    // this.subscription = Observable.fromEvent(document, 'keypress').debounceTime(2000).subscribe(e => {
    //   console.log(document);
    // });

    // Observable
    // .fromEvent(document, 'keyup')
    // .map(() => this.InputValue)
    // .debounceTime(1000)
    // .subscribe(e => {console.log(e);});
  }

  SetInputAry($event:KeyboardEvent){
    console.log($event);
    this.PassInputValue.emit(this.InputValue);
    console.log(this.InputValue);
    this.InputValue = '';
  }

  ClickTitle(TitleComponent){
    // console.log(TitleComponent.Tips);
  }

  KeyPressEvent(terms: KeyboardEvent){

  }
}
