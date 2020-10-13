import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { DaysPipe } from './pipes/days.pipe';
import { Days2Pipe } from './pipes/days2.pipe';



@NgModule({
  declarations: [TotalPipe, DaysPipe, Days2Pipe],
  imports: [
    CommonModule
  ], exports: [
    TotalPipe,
    DaysPipe,
    Days2Pipe
  ]
})
export class SharedModule { }
