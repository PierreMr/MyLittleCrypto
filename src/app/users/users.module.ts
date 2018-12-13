import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [LoginComponent, SubscribeComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
