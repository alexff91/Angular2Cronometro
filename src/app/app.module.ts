import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Chronometer } from './chronometer'
import { ClockFactory } from './class/clockFactory'

@NgModule({
  declarations: [
    AppComponent,
    Chronometer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ClockFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
