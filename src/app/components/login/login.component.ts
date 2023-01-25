import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindata?:any;
  messageOnSubmit:any;
  isloggedin:boolean | undefined;
  constructor(private loginService:LoginService,private route:Router) {   window.localStorage.clear(); }
  loginFormGroup = new FormGroup({
    "email": new FormControl('',[Validators.required , Validators.email]),
    "password": new FormControl('',[Validators.required,Validators.minLength(3)])
  });
  
  
  loginCheck(){
    // console.log(this.loginFormGroup.value);
    // storing form data into the model class
    this.logindata= this.loginFormGroup.value;
    console.log(this.logindata);
    this.loginService.login(this.logindata).subscribe(
      response => {
        console.log("Login Successfull");
        console.log(this.logindata);
        window.localStorage.setItem('email', this.logindata.email);
        console.log(this.logindata.email);
        window.alert("Login Successfull");
        this.route.navigate(['/dash']);
      },
      error => {
        console.log("Login error ");
        console.log(error);
        window.alert("Invalid Credentials Entered");
        location.reload();
        return;
      }
    );
  }

  get password() {
    return this.loginFormGroup.get('password')
  }

  get emailId() {
    return this.loginFormGroup.get('email')
  }
  ngOnInit(): void {
  }

}
