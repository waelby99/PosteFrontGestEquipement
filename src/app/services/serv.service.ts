import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materiel } from '../models/materiels.model';
import { Service } from '../models/service.model';
const baseUrl ='http://localhost:8080/service/'

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http: HttpClient) { }

  getServiceById(idService:any):Observable<any> {
    return this.http.get('http://localhost:8080/service/findOneById/'+idService);
  }
  getAllDirecServ(/*idDirection:any*/):Observable<any> {
    return this.http.get('http://localhost:8080/direction/FindByNm/1')
  }
  getAllServUser(idService:any):Observable<any> {
    return this.http.get('http://localhost:8080/service/findyiddetail/'+idService);
  }
  updateService(idService: any, data: any):Observable<any>{
    return this.http.put('http://localhost:8080/service/updateService/'+idService,data);
  }
  updateDirection(idDirection:any,data:any):Observable<any>{
    return this.http.put('http://localhost:8080/direction/modifDirec/'+idDirection,data);
  }
  getAllServ():Observable<any> {
    return this.http.get('http://localhost:8080/service/AaaService');
  }
  addService(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/service/addServices',data);
  }
  
}
