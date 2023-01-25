import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../task';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url5:string  = "http://localhost:8081/api/v2/addtask/"
  url4:string  = "http://localhost:8081/api/v2/getfromtask/"
  url6:string  = "http://localhost:8081/api/v2/deletetask/"
  url7:string  = "http://localhost:8081/api/v2/updatetask"
 
  constructor(private httpclient:HttpClient) { }
saveUser(){

}
  addTask(task: Tasks):Observable<Tasks> {
    let email = window.localStorage.getItem('email');
    return this.httpclient.post<Tasks>(this.url5+email,task);
  }
  getUserTask():Observable<Tasks>{
    let email = window.localStorage.getItem('email');
    return this.httpclient.get<Tasks>(this.url4+email);
   
  }
   deleteUserTask( taskId: string):Observable<Tasks> { 
    let email = window.localStorage.getItem('email');
    return this.httpclient.delete<Tasks>(this.url6+email+"/"+taskId);
  }
  updateUserTask(task:Tasks):Observable<Tasks>{
    let email = window.localStorage.getItem('email');
    return this.httpclient.put<Tasks>(this.url7+'/'+email,task)
  }
}
