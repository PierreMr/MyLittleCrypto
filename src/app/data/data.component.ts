import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {


  objectKeys = Object.keys;
  /* On met dans un tableau si on veux ajouter des monnnaies 
  il suffit de changer uniquement le tableau */ 
  money = ["BTC", "ETH", "DASH", "IOT"];
  allDatas = [];
  private limit = 10; /* + 1 element */
  cryptos: any;
  
  constructor(private _data: DataService) { } 

  ngOnInit() { 

		
		// /* On boucle pour n'utiliser qu'un fonction */
		// for (let item in this.money) {
		// 	this.getDayStats(this.money[item])
		// }
  }

  // /* Get current main money values */
  // getCurrentPrices() {
  // 	return new Promise((resolve, reject) => {
  // 		this._data.getPricesToday()
  //         .then(response => {
  //           this.cryptos = response	
  //           resolve(this.cryptos)
  //         })
  //         .catch(reject)
  // 	})
  // }

  // /* Get day value for each money */
  // getDayStats(item) {
		// return new Promise((resolve, reject) => {
		// 	this._data.getDayChart(item, this.limit)
		//     .then(response => {

		//       this.allDatas.push(response)
		      
		//       let times = response.map(response => response.time)
		//       let closes = response.map(response => response.close)	      
		//       let opens = response.map(response => response.open)	      
		      
		//       this.getCharts(times, closes, opens, item)
		//       resolve(this.allDatas)
		//     })
		//     .catch(reject)
		// })
  // }

  // getCharts(times, closes, opens, item) {
  
  // 		this.chart = new Chart(`${item}`, {
  //         type: 'line',
  //         data: {
  //           labels: times,
  //           datasets: [
  //             { 
  //               data: closes,
  //               borderColor: "#3cba9f",
  //               fill: true
  //             },
  //             { 
  //               data: opens,
  //               borderColor: "#ffcc00",
  //               fill: false
  //             },
  //           ]
  //         },
  //         options: {
  //           legend: {
  //             display: false
  //           },
  //           scales: {
  //             xAxes: [{
  //               display: true
  //             }],
  //             yAxes: [{
  //               display: true
  //             }],
  //           }
  //         }
  //       });
  // }

}
