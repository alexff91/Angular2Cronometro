import {Component} from '@angular/core';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  title = 'Mi primera aplicación Angular 2!';
  public hora : number;
  public minuto : number;
  public segundos : number;

  public horaLapso : number = 0;
  public minutoLapso : number = 0;
  public segundosLapso : number = 0;

  public collection : Array < any > = [];
  public contador : any;

  constructor() {
    this.hora = 0;
    this.minuto = 0;
    this.segundos = 0;
  }

  start = () => {
    if (this.contador == undefined) {
      this.contador = setInterval(() => {
        this.segundos++;
        if (this.segundos === 60) {
          this.segundos = 0;
          this.minuto++;
          if (this.minuto === 60) {
            this.minuto = 0;
            this.hora++;
            if (this.hora === 20) {
              this.hora = 0;
            }
          }
        }
      }, 1);
    }
  }

  lapso = () => {
    let obj : any = {};
    obj.hora = this.hora;
    obj.minutos = this.minuto;
    obj.segundos = this.segundos;

    this
      .collection
      .push(obj);
  }

  stop = () => {
    clearInterval(this.contador);
    this.hora = 0;
    this.minuto = 0;
    this.segundos = 0;
    this.contador = null;
  }
}
