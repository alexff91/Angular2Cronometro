import {JobFrequency} from './job-frequency';

export class CronSelector {
public minuteValues: Array<number> = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
public hourValues: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
public dayOfMonthValues: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
public dayValues: Array<number> = [0, 1, 2, 3, 4, 5, 6];
public monthValues: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

public myFrequency:JobFrequency;

frequencySelector = [{
                value: 1,
                label: "Minute"
            }, {
                value: 2,
                label: "Hour"
            }, {
                value: 3,
                label: "Day"
            }, {
                value: 4,
                label: "Week"
            }, {
                value: 5,
                label: "Month"
            }, {
                value: 6,
                label: "Year"
            }];



}
