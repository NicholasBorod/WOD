import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AttributesComponent} from "./attributes.component";



@NgModule({
  declarations: [
    AttributesComponent
  ],
  exports: [
    AttributesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AttributesModule { }
