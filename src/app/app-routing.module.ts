import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharsheetComponent} from "./charsheet/charsheet.component";

const routes: Routes = [{
  path: '', component: CharsheetComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
