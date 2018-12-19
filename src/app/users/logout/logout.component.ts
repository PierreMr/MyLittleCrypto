import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

	// navigate(){
	//   this.router.navigate(['/login']);     //Add this line to navigate in your method
	// }

  ngOnInit() {
  	localStorage.clear();
	console.log(localStorage.getItem('user'))
	// navigate();
  }

}
