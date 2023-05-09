import { Injectable } from '@angular/core';
import { IClassN } from '../shared/classN';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  _class!:IClassN;
  //url:string = "https://localhost:7122/api/Classes";  

  constructor(private http:HttpClient) { }

  getAllClasses():Observable<IClassN[]>
  {
    return this.http.get<IClassN[]>(baseURL + 'classes/');
  }
  postClass() {
    return this.http.post(baseURL + 'classes/', this._class);
  }
  getClassByID(id:any){
    return this.http.get(`${baseURL}/${id}`);
  }
  deleteClass(id:any){
    return this.http.delete(`${baseURL}/${id}`);
  }
}
