import {Component} from '@angular/core';
import {Clock} from './class/clock';

@Component({selector: 'chronometer', templateUrl: './chronometer.html'})

export class Chronometer {
  public hora : number;
  public minuto : number;
  public segundos : number;

  public horaLapso : number = 0;
  public minutoLapso : number = 0;
  public segundosLapso : number = 0;

  public collection : Array < Clock > = [];
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
    let obj = new Clock(this.hora, this.minuto, this.segundos);
    this.collection.push(obj);
  }

  stop = () => {
    clearInterval(this.contador);
    this.hora = 0;
    this.minuto = 0;
    this.segundos = 0;
    this.contador = null;
  }
}