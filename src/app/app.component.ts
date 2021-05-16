import { Component,OnChanges,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit,OnChanges{
  value:string=''
  title = 'componentlife';
  destroy=true;
  submitValue(val:string){
   this.value=val;
  }
  constructor(){
    console.log('constructor called parent')
    // of(1,2,3,4)
  }
  ngOnChanges(){
    console.log('constructor called parent ngOnChanges')
  }
  ngOnInit(): void {
    
    console.log('ngOninit called parent')
    
  }
  destroyComp(){
    this.destroy=false;
  }
}
