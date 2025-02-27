import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestcorusolComponent } from './latestcorusol/latestcorusol.component';



@NgModule({
  declarations: [
    LatestcorusolComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LatestcorusolComponent]
})
export class WebmainModule { }
