import { Component, OnInit } from '@angular/core';
import { User } from './_models/user'; 
import { Router } from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private token:string
	ServerUrl = 'http://localhost:8000/api/'; 
	credentials: User = {
		id: 0,
		name:'',
		email:'',
		password:''
	}

  constructor(private spinner: NgxSpinnerService, private router:Router ) { }

  ngOnInit() {
  	/** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }

  login(){
	this.spinner.show();
		console.log(this.credentials);

	let config = {
	  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	  //responseType: 'blob'
	};

	axios.post(this.ServerUrl+'login', this.credentials, config)
	     .then((response) => {
	        console.log(response.data);
	});

	setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);

		// this.auth.login(this.credentials).subscribe(
		// 	() =>{
		// 		this.spinner.hide();
		// 		this.router.navigateByUrl('/home')
		// 	},
		// 	err => {
		// 		this.spinner.hide();
		// 		//console.error(err);
		// 		alert(err.error.error);
		// 	}
		// )
	}
}
