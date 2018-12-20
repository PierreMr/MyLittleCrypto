import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "My Little Crypto"
  objectKeys = Object.keys;  
  cryptos: any;
  user: any;
  chucksdata: any;

  constructor(private _data: DataService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getCurrentPrices()
  	this.getChucksData()
  	this.user = JSON.parse(localStorage.getItem('user'));
  }

    /* Get current main money values */
  getCurrentPrices() {
  	return new Promise((resolve, reject) => {
  		this._data.getPricesToday()
          .then(response => {
            this.cryptos = response	
            resolve(this.cryptos)
          })
          .catch(reject)
  	})
  }

    /* Get data from Chuck's API */
  getChucksData() {
    return new Promise((resolve, reject) => {
      this
        .httpClient
        .get<any>('http://localhost:3000/apichuck')
        .toPromise()
        .then(response => {
          this.chucksdata = JSON.parse(response)
        })
        .catch(reject)
    })
  }
}