import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { SubscribeComponent } from './users/subscribe/subscribe.component';
import { LogoutComponent } from './users/logout/logout.component';
import { DataService } from './data.service';
import { DataComponent } from './data/data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { CryptoService } from './crypto.service'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscribeComponent,
    LogoutComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserModule.withServerTransition({appId: 'my-wallet-app'}), 
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
