import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../task';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url2:string  = "http://localhost:8081/api/v2/register";
  constructor(private httpClient: HttpClient) { }
  saveUser(task:Tasks):Observable<object>{
    return this.httpClient.post(`${this.url2}`,task)
   }
}
