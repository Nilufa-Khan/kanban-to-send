import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  logindata?:any;
  messageOnSubmit:any;
  isloggedin:boolean | undefined;
  constructor(private adminservice:AdminServiceService,private route:Router) { }
  loginFormGroup = new FormGroup({
    "email": new FormControl('',[Validators.required , Validators.email]),
    "password": new FormControl('',[Validators.required,Validators.minLength(3)])
  });
  
  
  loginCheck(){
    this.logindata= this.loginFormGroup.value;
    console.log(this.logindata);
    this.adminservice.adminLogin(this.logindata).subscribe(
      response => {
        console.log("Login Successfull");
        console.log(this.logindata);
        console.log(this.logindata.email);
        window.alert("Login Successfull");
        this.route.navigate(["adminboard"]);
      },
      error => {
        console.log("Login error ");
        console.log(error);
        window.alert("Invalid Credentials Entered. Please Try Again");
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
