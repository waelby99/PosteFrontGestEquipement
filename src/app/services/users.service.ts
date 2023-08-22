import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materiel } from '../models/materiels.model';
 
const baseUrl ='http://localhost:8080/api/';
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getAllUsers():Observable<any>{
    return this.http.get(baseUrl+'test/getAllUsers');
  }
  getUserById(id:any):Observable<any>{
    return this.http.get(baseUrl+'test/findbyId/'+id);
  }
  getAllUser(id:any):Observable<any>{
    return this.http.get(baseUrl+'test/getAllUser/'+id);
  }
  SignUp(username:string,email:string, password:string, roles:any,serviceIdService:any):Observable<any>{
    return this.http.post('http://localhost:8080/api/auth/signUp',{
      username,
      email,
      password,
      roles,
      serviceIdService
    })
  }
  getUserMat(id:any):Observable<any>{
    return this.http.get('http://localhost:8080/api/test/findmats/'+id);
  }
  
  getUserCom(id:any):Observable<any>{
    return this.http.get('http://localhost:8080/api/test/findcom/'+id);
  }
  updateUser(id:any,data:any):Observable<any>{
    return this.http.put('http://localhost:8080/api/test/updateUser/'+id,data);}
}
