import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user'
import { Router } from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner"
import axios from 'axios'
import { AuthenticationService } from  '../_models/authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private spinner: NgxSpinnerService, private router:Router, public auth: AuthenticationService ) { }

  ngOnInit() {
  }
}
