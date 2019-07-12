import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder , Validators, ValidationErrors  } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  
  constructor(private spinner: NgxSpinnerService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }  
   

  ngOnInit() {
  	/** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }

  // submit() {
  //   if (this.form.valid) {
  //     console.log(this.form.value);
  //   }
  // }

  submit() {
    console.log(this.form.value);
  }

  // let config = {
  //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //   responseType: 'blob'
  // };

  // axios.post('https://appdividend.com', data, config)
  //      .then((response) => {
  //         console.log(response.data);
  // });

}
