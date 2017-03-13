export class Clock {
  private hour : number;
  private minutes : number;
  private seconds : number;

  constructor(hour : number, minutes : number, seconds : number) {
    this.hour = hour;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  getHour():number {
    return this.hour;
  }

  setHour(hour:number) {
    this.hour = hour
  }

  getMinutes():number {
    return this.minutes;
  }

  setMinutes(minutes:number) {
    this.minutes = minutes
  }

  getSeconds():number {
    return this.seconds;
  }

  setSeconds(seconds:number) {
    this.seconds = seconds
  }

}