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
    return new Promise((resolve, reject) => {
      this
        .httpClient
        .get('http://localhost:3000/get-users')
        .toPromise()
        .then(response => {
          resolve(response)
        })
        .catch(reject)
    })
    
  }
}
