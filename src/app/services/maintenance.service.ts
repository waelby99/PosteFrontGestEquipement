import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materiel } from '../models/materiels.model';
const baseUrl ='http://localhost:8080/maintenance/'

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(private http: HttpClient) { }
  getAllMaintenances():Observable<any>{
    return this.http.get(baseUrl+'AaaMaint');
  }
  getMaterielById(idMateriel:any):Observable<any> {
    return this.http.get(baseUrl+'getById'+'/'+idMateriel);
  }
  addMat(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/maintenance/addMaintenances',data);
  }
  /*getById(idMaint:any):Observable<any>{
    return this.http.get('')
  }*/
  editMaint(idMaint: any, data: any):Observable<any>{
    return this.http.put('http://localhost:8080/maintenance/updateMaint/'+idMaint,data);
  }
  getMaintenanceEnCours():Observable<any>{
    return this.http.get('http://localhost:8080/maintenance/aaa');
  }
}
