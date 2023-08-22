import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materiel } from '../models/materiels.model';
const baseUrl ='http://localhost:8080/materiel/'

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class MaterielsService {

  constructor(private http: HttpClient) { }

  getAllMateriels():Observable<any>{
    return this.http.get(baseUrl+'AaaMat');
  }
  getMaterielById(idMateriel:any):Observable<any> {
    return this.http.get(baseUrl+'getById'+'/'+idMateriel);
  }
  getUserById(id:any):Observable<any> {
    return this.http.get('http://localhost:8080/api/test/findbyId/'+id);
  }
  getMaterielByType(typeMat:any):Observable<any> {
    return this.http.get(`${baseUrl}?typeMat=${typeMat}`);
  }
  addMater(data:any):Observable<any>{
    return this.http.post('http://localhost:8080/materiel/addMateriels',data);
  }
  editMater(idMateriel: any, data: any):Observable<any>{
    return this.http.put(baseUrl+'updateMateriel/'+idMateriel,data);
  }
  getMatEnd():Observable<any>{
    return this.http.get('http://localhost:8080/materiel/getAllEndo');
  }
  deleteMat(idMateriel:any):Observable<any>{
    return this.http.delete('http://localhost:8080/materiel/deleteMateriel/'+idMateriel);
  }
  getDirectionById(idDirection:any):Observable<any> {
    return this.http.get('http://localhost:8080/direction/findOneById/'+idDirection);
  }
 
  getMaintUser(idMateriel:any):Observable<any> {
    return this.http.get('http://localhost:8080/materiel/findmatmaint/'+idMateriel);
  }
  getMatMant():Observable<any>{
    return this.http.get('http://localhost:8080/materiel/getAllEnMaint');
  }
  getMatPan():Observable<any>{
    return this.http.get('http://localhost:8080/materiel/getEnPanne');
  }
}
