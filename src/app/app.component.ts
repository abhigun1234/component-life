import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  value:string=''
  title = 'componentlife';
  destroy=true;
  submitValue(val:string){
   this.value=val;
  }
  constructor(){
    console.log('constructor called parent')
  }
  ngOnInit(): void {
    
    console.log('ngOninit called parent')
    
  }
  destroyComp(){
    this.destroy=false;
  }
}
