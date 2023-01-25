import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url1:string  = "http://localhost:8085/api/v1/login";
  isLoggedin : boolean | any ;
  constructor(private httpClient: HttpClient) { }
  login(logindata: any){
    this.isLoggedin=true;
    return this.httpClient.post<any>(this.url1,logindata);
  }
}
