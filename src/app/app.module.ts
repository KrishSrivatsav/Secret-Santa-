import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoComponent } from './lo/lo.component';
import { RegComponent } from './reg/reg.component';
import { ForComponent } from './for/for.component';
import { ResComponent } from './res/res.component';


@NgModule({
  declarations: [
  AppComponent,
  LoComponent,
  RegComponent,
  ForComponent,
  ResComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
