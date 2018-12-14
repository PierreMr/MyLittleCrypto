import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string;
  password: string;
  msg = undefined;

  constructor(private httpClient: HttpClient) { }

  doLogin() {
    let user = {
      "login": this.login,
      "password": this.password
    }

    return new Promise((resolve, reject) => {
      this
        .httpClient
        .post<any>('http://localhost:3000/login', user)
        .toPromise()
        .then(response => {
          this.msg = response.msg
          const user = response.user
          localStorage.clear();
          localStorage.setItem('user', JSON.stringify(user))
          console.log(localStorage.getItem('user'))
          resolve(response)
        })
        .catch(reject)
    }) 
  }
}