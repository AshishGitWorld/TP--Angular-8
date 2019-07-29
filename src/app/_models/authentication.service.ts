import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { User, Signup, login } from '../_models/user'
import axios from 'axios'

export interface UserDetails {
	id:number
	name:string
	email:string
	password:string
	exp:number
	iat:number
}

export interface PackageDetails {
	id:number
	package_title:string
	package_description:string
	duration:string
	status:number
	package_img:string

}

interface TokenResponse {
	token:string
}

// export interface TokenPayload{
// 	id:number
// 	name:string
// 	email:string
// 	password:string
// }

export interface PackagePayload{
	id: number,
    package_title:string,
    package_description:string,
    duration:string,
    package_img:string
}

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService{
	private token:string
	ServerUrl = 'http://localhost:8000'; 
	constructor(private http:HttpClient, private router: Router){}

	public saveToken(token:string):void {
		localStorage.setItem('usertoken', token)
		this.token = token
	}

	public getToken(): string{
		if(!this.token){
			this.token = localStorage.getItem('usertoken')
		}
		return this.token
	}

	public getUserDetails(): UserDetails{
		const token = this.getToken()
		let payload
		if(token != null){
			//console.log(token);
			payload = token.split('.')[1]
			payload = window.atob(payload)
			return JSON.parse(payload)
		}else{
			return null
		}
	}


	public isLoggedIn():boolean{
		const user = this.getUserDetails()
		if(user){
			return user.exp > Date.now()/1000
		}else{
			return false
		}
	}

	public profile(): Observable<any> {
		return this.http.get(this.ServerUrl+`/api/profile`,{
			headers : { Authorization: `Bearer ${this.getToken()}`}
		})
	}

	public logout(): void {
		this.token =''
		window.localStorage.removeItem('usertoken')
		this.router.navigateByUrl('/')
	}

	public register(user: Signup): Observable<any> {
		console.log(user)
		return this.http.post( this.ServerUrl+`/api/register`, user, {
			headers:{ 'Content-Type' : 'application/json' }
		})
	}

	public login(user: login): Observable<any> {
		const base = this.http.post(
				this.ServerUrl+`/api/login`,
				{email :user.email, password:user.password },
				{
					headers: { 'Content-Type' : 'application/json' }
				}
			)
	
		const request = base.pipe(
			map((data:TokenResponse) => {
				if(data.token){
					this.saveToken(data.token)
				}
				console.log(data);
				console.log(this.getToken());
				return data
			})
		)
		return request
	}

}