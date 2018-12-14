import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataService {
	result:any;
	money:string;
	limit:number;

  	constructor(private _http: HttpClient) { }

	getPricesToday() {
		 return new Promise((resolve, reject) => {
	      this
	        ._http
	        .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,IOT&tsyms=EUR')
		        .toPromise()
		        .then(response => {
		        
		          resolve(response)
		        })
		        .catch(reject)
			})
	}

	getDayChart(money, limit) {
		 return new Promise((resolve, reject) => {
	      this
	        ._http
	        .get<any>(`https://min-api.cryptocompare.com/data/histoday?fsym=${money}&tsym=USD&limit=${limit}`)
		        .toPromise()
		        .then(response => {	
		          resolve(response.Data)
		        })
		        .catch(reject)
			})
	}
}


/* map(result => this.result = result.json()) */