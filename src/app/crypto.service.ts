import { Injectable } from '@angular/core';
import { Crypto } from './entities/crypto.entities';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
 
  private cryptos: Crypto[]; 

  constructor() { 
  	this.cryptos = [
  		/*
  		{ id: 1, name: 'BTC', photo: 'http://google.fr', valueOpen: 3000, valueClose: 2800},
  		{ id: 2, name: 'ETH', photo: 'http://google.fr', valueOpen: 70, valueClose: 80},
  		{ id: 3, name: 'DASH', photo: 'http://google.fr', valueOpen: 500, valueClose: 520},
  		{ id: 4, name: 'IOT', photo: 'http://google.fr', valueOpen: 0.18, valueClose: 0.20},
  		*/
  	];
  }

  findAll(): Crypto[] {
  	return this.cryptos;
  }

  find(id: number): Crypto {
  	return this.cryptos[this.getSelectedIndex(id)];
  } 

  getSelectedIndex(id: number): number {
  	for(var i = 0; i < this.cryptos.length; i++) {
  		if(this.cryptos[i].id == id)
  			return i;
  	}
  return -1;
  }
}
