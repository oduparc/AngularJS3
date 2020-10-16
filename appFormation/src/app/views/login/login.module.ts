import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [FormLoginComponent, PageLoginComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
