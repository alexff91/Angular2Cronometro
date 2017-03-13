import { Injectable } from '@angular/core';
import { Clock } from './clock'

@Injectable()
export class ClockFactory {
	constructor() {

	}

	newClock = (hour, minutes, seconds):Clock => {
		return new Clock(hour, minutes, seconds);
	}

	// newClock (hour:number, minutes:number, seconds:number):Clock {
	// 	return new Clock(hour, minutes, seconds);
	// }
}