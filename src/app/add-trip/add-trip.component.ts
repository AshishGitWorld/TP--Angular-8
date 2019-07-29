import { Component, OnInit } from '@angular/Core';
import { AuthenticationService } from  '../_models/authentication.service'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

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
  	
  	//this.loadScript('../assets/create-trip/script/js');
  }

}
