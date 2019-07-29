import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from  '../_models/authentication.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

	public loadScript(url: string) {
		const body = <HTMLDivElement> document.body;
		const script = document.createElement('script');
		script.innerHTML = '';
		script.src = url;
		script.async = false;
		script.defer = true;
		body.appendChild(script);
	}
  ngOnInit() {
  	this.loadScript('../assets/tour-grid/custom.js');
  }

}
