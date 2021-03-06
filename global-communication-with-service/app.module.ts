import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Cmpt1Component } from './cmpt1.component';
import { Cmpt2Component } from './cmpt2.component';

import { CounterService } from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    Cmpt1Component,
    Cmpt2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
