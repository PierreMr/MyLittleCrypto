import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { SubscribeComponent } from './users/subscribe/subscribe.component';
import { LogoutComponent } from './users/logout/logout.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'subscribe',
      component: SubscribeComponent
    },
    {
      path: 'logout',
      component: LogoutComponent
    },
    {
      path: 'data',
      component: DataComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
