import { AfterContentInit, Component, DoCheck, Input, OnChanges,
   OnInit, SimpleChange, SimpleChanges,AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit ,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() myValue = "justlearn"
  constructor() {

    console.log('constructor called  child')


  }

  ngOnInit(): void {

    console.log('ngOninit called child')

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called child')
    console.log(changes)
    console.log(changes.myValue.currentValue)
  }
  ngDoCheck() {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy')
  }
}
