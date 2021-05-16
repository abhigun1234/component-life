import { AfterContentInit, Component, DoCheck, Input, OnChanges,
   OnInit, SimpleChange, SimpleChanges,AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit ,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() myValue = "justolearn"
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
    console.log('ngDoCheck child')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit child')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked child')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit child')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy child')
  }
}
