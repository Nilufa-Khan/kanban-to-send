import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../task';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  url:string  = "http://localhost:8086/api/v3/adminlogin";
  url2:string  = "http://localhost:8081/api/v2/register";
  url12:string  = "http://localhost:8081/api/v2/delete"
  url3:string  = "http://localhost:8081/api/v2/alltask";
  url8:string  = "http://localhost:8081/api/v2/addtask";


  url15:string  = "http://localhost:8081/api/v2/update";
  isLoggedin : boolean | any ;
  constructor(private httpclient:HttpClient) { }
  adminLogin(logindata: any){
    this.isLoggedin=true;
    return this.httpclient.post<any>(this.url,logindata);
  }
  
  getAllTasks():Observable<Tasks[]>{
    return this.httpclient.get<Tasks[]>(this.url3);
   }


 
  saveTask(task: Tasks):Observable<object>{
    return this.httpclient.put(`${this.url8}`,task)
   }

  deleteTaskAdmin(taskId:string):Observable<object>{
    return this.httpclient.delete(`${this.url12}/${taskId}`);
  }
  
  updateAdminTask(task:Tasks):Observable<Tasks>{
    return this.httpclient.put<Tasks>(this.url15+'/'+task.taskId,task)
  }
 
}
