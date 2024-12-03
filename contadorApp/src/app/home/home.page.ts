import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Declaracion de variables
  public numero: number;
  public numCero: string;

  constructor() {
    // Llamada al constructor y dando su valor
    this.numero = 0;
    this.numCero = '00'
  }

  // Funcion
  subirNumero(){
    this.numero++;
    this.validacionNum();
  }

  // Funcion
  bajarNumero(){
    this.numero--;
    this.validacionNum();
  }

  // Validacion
  validacionNum(){
    if(this.numero < 10) {
      this.numCero = '0' + this.numero;
    } else {
      this.numCero = '' + this.numero;
    }
  }

}
