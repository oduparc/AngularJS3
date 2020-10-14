import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { DaysPipe } from './pipes/days.pipe';
import { Days2Pipe } from './pipes/days2.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { ColorDaysDirective } from './directives/color-days.directive';



@NgModule({
  declarations: [TotalPipe, DaysPipe, Days2Pipe, ColorStateDirective, ColorDaysDirective],
  imports: [
    CommonModule
  ], exports: [
    TotalPipe,
    DaysPipe,
    Days2Pipe,
    ColorStateDirective,
    ColorDaysDirective
  ]
})
export class SharedModule { }
