import { Component, OnInit } from '@angular/core'
import { User, login } from '../_models/user'
import { Router } from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner"
import axios from 'axios'
import { AuthenticationService } from  '../_models/authentication.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	 
	private token:string
	ServerUrl = 'http://localhost:8000/api/'; 
	credentials: login = {
		email:'',
		password:''
	}

  constructor(private spinner: NgxSpinnerService, private router:Router, public auth: AuthenticationService ){ }

  ngOnInit() {
  	this.loadScript('../assets/login/js/main.js');
  	// /** spinner starts on init */
   //  this.spinner.show();
 
   //  setTimeout(() => {
   //    /** spinner ends after 5 seconds */
   //    this.spinner.hide();
   //  }, 3000);
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

	login(){
		let temp = 1;
		for (var v in this.credentials) // for acts as a foreach  
        {  
            if(this.credentials[v] == '' || this.credentials[v] == null){
  				temp = 0;
            } 
        }  

		let config = {
		  headers: { 'Content-Type': 'application/json' }, 
		};

		if(temp == 1){
			this.spinner.show();

			this.auth.login(this.credentials).subscribe(
				() =>{
					this.spinner.hide();
					this.router.navigateByUrl('/')
				},
				err => {
					this.spinner.hide();
					console.error(err)
				}
			)

			/*axios.post(this.ServerUrl+'login', this.credentials, config)
				.then((response) => {
					console.log(response.data);
				console.log(response.data.success);	        
				console.log(response.data.success.token);

				if(response.data.success.token){
					this.auth.saveToken(response.data.success.token)
					//this.router.navigateByUrl('/');
					this.router.navigate(['/']);
				}else{
					alert('Oops! Some error occoured, Please try again.');
				} 
				this.spinner.hide();
			}).catch(error => {
				this.spinner.hide();
	            let errObj = JSON.parse(JSON.stringify(error));
	            console.log(errObj)
			});*/
		}

		
	}
}
