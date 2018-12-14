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

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  subscribe() {
    let user = JSON.stringify({
          "login": this.login,
          "password": this.password
        })

    console.log(user)

    return new Promise((resolve, reject) => {
      this
        .httpClient
        .get('http://localhost:3000/add-user/'+user)
        .toPromise()
        .then(response => {
          resolve(response)
        })
        .catch(reject)
    })
    
  }
}
