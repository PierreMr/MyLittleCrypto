import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class DataService {
	result:any;

  	constructor(private _http: HttpClient) { }

	getPrices() {
		 return new Promise((resolve, reject) => {
	      this
	        ._http
	        .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,IOT&tsyms=USD,EUR"')
		        .toPromise()
		        .then(response => {
		          console.log(response)
		          resolve(response)
		        })
		        .catch(reject)
			})
	}



}


/* map(result => this.result = result.json()) */
