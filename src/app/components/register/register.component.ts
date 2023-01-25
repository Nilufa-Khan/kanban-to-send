import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { Tasks } from 'src/app/task';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService,private route:Router) { }
task:Tasks = new Tasks()
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.task);
   this.saveCredentials()
 }
 saveCredentials(){
  this.registerService.saveUser(this.task).subscribe(data=>
    {console.log(data);
    this.goToLogin()},
error=>console.log(error));
  }
  goToLogin(){
         this.route.navigate(['/login']);
       }

}
