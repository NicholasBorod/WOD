import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharsheetComponent } from './charsheet.component';
import {AbilitiesModule} from "./abilities/abilities.module";
import {AttributesModule} from "./attributes/attributes.module";


@NgModule({
  declarations: [
    CharsheetComponent
  ],
  exports: [
    CharsheetComponent
  ],
  imports: [
    CommonModule,
    AbilitiesModule,
    AttributesModule
  ]
})
export class CharsheetModule { }
