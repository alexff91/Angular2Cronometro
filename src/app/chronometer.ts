import { Component } from '@angular/core';
import { Clock } from './class/clock';
import { ClockFactory } from './class/clockFactory'

@Component({selector: 'chronometer', templateUrl: './chronometer.html'})

export class Chronometer {
  public hour : number = 0;
  public minutes : number  = 0;
  public seconds : number  = 0;

  public hourLapso : number = 0;
  public minutesLapso : number = 0;
  public secondsLapso : number = 0;

  public collection : Array < Clock > = [];
  public contador : any;

  public clockFactory:ClockFactory;

  constructor(clockFacory:ClockFactory) {
    this.clockFactory = clockFacory;
  }

  start = () => {
    if (this.contador == undefined) {
      this.contador = setInterval(() => {
        this.seconds++;
        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes++;
          if (this.minutes === 60) {
            this.minutes = 0;
            this.hour++;
            if (this.hour === 20) {
              this.hour = 0;
            }
          }
        }
      }, 1);
    }
  }

  lapso = () => {
    let obj = this.clockFactory.newClock(this.hour, this.minutes, this.seconds);
    this.collection.push(obj);
  }

  stop = () => {
    clearInterval(this.contador);
    this.hour = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.contador = null;
  }
}