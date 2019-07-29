import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner"
import axios from 'axios'
import { AuthenticationService } from  '../_models/authentication.service'
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

	private token:string
	ServerUrl = 'http://localhost:8000/api/'; 

  constructor(private spinner: NgxSpinnerService, private router:Router, public auth: AuthenticationService) {
  }

  ngOnInit() {
  	this.spinner.show(); 
		
		let config = {
		  headers: { 'Content-Type' : 'application/json','Authorization': 'Bearer '+ this.auth.getToken() }, 
		}; 
		console.log(config);
		console.log(this.auth.getToken());
		axios.get(this.ServerUrl+'logout', config)
		     .then((response) => {
		     	console.log(response);
		     	if(response.data == 200){
		     		this.token ='';
					window.localStorage.removeItem('usertoken');
					this.router.navigateByUrl('/');
		     	}else{
		     		alert('Oops! , some error occoured.');
		     		this.router.navigateByUrl('/');
		     	}	      
		        this.spinner.hide();
		}).catch(error => {
			this.spinner.hide();
            let errObj = JSON.parse(JSON.stringify(error));
            console.log(errObj);
            this.router.navigateByUrl('/');
		});

  }

}
