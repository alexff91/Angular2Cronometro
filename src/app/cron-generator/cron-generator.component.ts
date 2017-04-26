import { Component, OnInit } from '@angular/core';
import {CronSelector} from './cron-selector';

@Component({
  selector: 'cg-crongenerator',
  templateUrl: './cron-generator.component.html',
  styleUrls: ['./cron-generator.component.css']
})
export class CronGeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this)
  }

items = [1,2,3,4,5];
mySelector = new CronSelector;

}
