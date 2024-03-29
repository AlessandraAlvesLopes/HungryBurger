import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { CadUserComponent } from './cad-user/cad-user.component';
import { RememberPassComponent } from './remember-pass/remember-pass.component';


@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    CadUserComponent,
    RememberPassComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ], 
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
