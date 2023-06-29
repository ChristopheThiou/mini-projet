import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-projet';
  ext = '';
  name = [
    'Sina',
    'Chris',
    'Momo'
  ]
   addName(ext:string){
    this.name.push(ext);
  }
}
