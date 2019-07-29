import { Component, OnInit } from '@angular/core';
import { Signup } from '../_models/user'
import { Router } from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner"
import axios from 'axios'
import { AuthenticationService } from  '../_models/authentication.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	private token:string
	ServerUrl = 'http://localhost:8000/api/'; 
	credentials: Signup = { 
		name:'',
		email:'',
		password:'',
		c_password:''
	}

	constructor(private spinner: NgxSpinnerService, private router:Router, public auth: AuthenticationService ) { }

	ngOnInit() {
	this.loadScript('../assets/signup/main.js');	
		/** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
	      /** spinner ends after 5 seconds */
	      this.spinner.hide();
	    }, 3000);
	}

	public loadScript(url: string) {
		const body = <HTMLDivElement> document.body;
		const script = document.createElement('script');
		script.innerHTML = '';
		script.src = url;
		script.async = false;
		script.defer = true;
		body.appendChild(script);
	}

	signup(){
		 
		let temp = 1;  
		for (var v in this.credentials) // for acts as a foreach  
        {   
            if(this.credentials[v] == '' || this.credentials[v] == null){
  				temp = 0;
            } 
        }
       
        if(temp == 1){
        	this.spinner.show(); 
			this.auth.register(this.credentials).subscribe(
				() =>{
					this.spinner.hide();
					this.router.navigateByUrl('/login')
				},
				err => {
					this.spinner.hide();
					console.error(err)
				}
			)
        } 
	}

}
