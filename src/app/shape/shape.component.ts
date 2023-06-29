import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent {
  width = 100;
  a = 0;
  bool = false;
  border = 50;
  b = 0;
  changeBorder(b:number){
    this.border = b;
  }
  changeWidth(a:number){
    this.width = a;
  }
  changeBool(){
    this.bool = !this.bool;
  }
}
