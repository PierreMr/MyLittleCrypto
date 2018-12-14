import { Component, OnInit } from '@angular/core';
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

  constructor(private _data: DataService) { }

  ngOnInit() {
  	this.getCurrentPrices()
  	this.user = JSON.parse(localStorage.getItem('user'));
  	console.log(this.user);
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


}