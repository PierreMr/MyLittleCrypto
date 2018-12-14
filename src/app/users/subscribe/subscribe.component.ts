import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  login: string;
  password: string;
  msg = undefined;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  subscribe() {
    let user = {
      "login": this.login,
      "password": this.password
    }

    return new Promise((resolve, reject) => {
      this
        .httpClient
        .post<any>('http://localhost:3000/add-user', user)
        .toPromise()
        .then(response => {
          this.msg = response.msg
          resolve(response)
        })
        .catch(reject)
    })    
  }
}
