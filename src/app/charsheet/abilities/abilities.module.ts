import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilitiesComponent } from './abilities.component';



@NgModule({
  declarations: [
    AbilitiesComponent
  ],
  exports: [
    AbilitiesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AbilitiesModule { }
