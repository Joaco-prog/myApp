import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  variable = 0
  variable2 = 0
  resultado = 0
  constructor() { }


  
  sumar() {
    this.resultado = this.variable + this.variable2;
  }

  multiplicar() {
    this.resultado = this.variable * this.variable2;
  }

  dividir() {
    this.resultado = this.variable / this.variable2;
  }

  restar() {
    this.resultado = this.variable - this.variable2;
  }
  
}
