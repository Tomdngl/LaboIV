import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  edad1 = '';
  edad2 = '';
  promedio: number = 0;
  suma: number = 0;

  calcular(){
    this.suma = Number(this.edad1) + Number(this.edad2);
    this.promedio = this.suma / 2;
  }

  limpiar(){

  }
}
