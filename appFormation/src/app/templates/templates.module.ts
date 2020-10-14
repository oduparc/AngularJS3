import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './table-light/table-light.component';
import { TableDarkComponent } from './table-dark/table-dark.component';
import { TableStripedComponent } from './table-striped/table-striped.component';



@NgModule({
  declarations: [TableLightComponent, TableDarkComponent, TableStripedComponent],
  imports: [
    CommonModule
  ], exports: [
    TableLightComponent,
    TableDarkComponent,
    TableStripedComponent
  ]
})
export class TemplatesModule { }
