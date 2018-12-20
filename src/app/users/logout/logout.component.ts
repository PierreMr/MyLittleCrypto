import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

	navigate() {
		this.router.navigate(['/login']);     //Add this line to navigate in your method
	}

	ngOnInit() {
		localStorage.clear();
		this.navigate();
	}

}
