import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 constructor(){
   for(var i = 0;i < this.studentsArr.length;i++){
     this.studentsArr[i] = i;
   }
 }

  studentsArr:Array<number> = new Array<number>(32);
  teachersArr:Array<number> = new Array<number>(4);
  range:Array<number> = new Array<number>(32);
  range2:Array<number> = new Array<number>(32);
  range3:Array<number> = new Array<number>(32);
  stuName:Array<string> = new Array<string>(32);
  
  imgS:Array<any> = new Array<any>(this.studentsArr.length);

  setStudentsArrey(event){
  
     this.studentsArr.length = event;
     this.range.length = event;
     this.range2.length = event;
     this.range3.length = event;
     this.stuName.length = event;

     for(var i = 0;i < this.range.length;i++){
       this.range[i] = 50;
       this.range2[i] = 50;
       this.range3[i] = 0;
     }

     for(let i = 0;i < this.studentsArr.length;i++){
      this.studentsArr[i] = i;
    }
    
     this.imgS.length = event;
  }

  setTechersArrey(event){
    this.teachersArr.length = event;
  }
}
