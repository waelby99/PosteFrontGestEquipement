import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl ='http://localhost:8080/commande/'

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }
  getAllCommandes():Observable<any>{
    return this.http.get(baseUrl+'AaaComm');
  }
  addComm(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/commande/addCommandes',data);
  }
  getComById(idCom:any):Observable<any>{
    return this.http.get('http://localhost:8080/commande/findById/'+idCom);
  }
  updateCom(idCom: any, data: any):Observable<any>{
    return this.http.put('http://localhost:8080/commande/modifCommande/'+idCom,data);
  }
  getCommande():Observable<any>{
    return this.http.get('http://localhost:8080/commande/AaaComa');
  }
  deleteCommande(idCom:any):Observable<any>{
    return this.http.delete('http://localhost:8080/commande/deleteCommande/'+idCom)
  }
}
