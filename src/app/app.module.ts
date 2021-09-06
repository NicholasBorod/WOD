import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CharsheetModule} from "./charsheet/charsheet.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharsheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
