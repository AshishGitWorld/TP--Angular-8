import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  constructor() { }

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
  	// this.loadScript('../assets/tour-grid/jquery.slim.min.js');
  	this.loadScript('../assets/tour-grid/custom-detail.js');
  }

}
