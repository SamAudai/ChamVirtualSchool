import { Injectable } from '@angular/core';
import { Teacher } from "../shared/teacher";
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';
import { ISubject } from '../shared/subject';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teacher!:Teacher;  

  constructor(private http: HttpClient) { }

   //return all teachers with promise
   getAllTeachers():Observable<Teacher[]>
  {
    return this.http.get<Teacher[]>(baseURL+'teachers/');
  }
  postTeacher() {
    return this.http.post(baseURL + 'teachers/', this.teacher);
  }
  getTeacherByID(id:any){
    return this.http.get(`${baseURL}/${id}`);
  }
  deleteTeacher(id:any){
    return this.http.delete(`${baseURL}/${id}`);
  }
  getAllGreeds():Observable<ISubject[]>{
    return this.http.get<ISubject[]>(baseURL + 'subjects/');
  }
}
