import { Injectable } from '@angular/core';
import { IStudent } from "../shared/student";
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { ISubject } from '../shared/subject';
import { Student_Subject } from '../shared/student_subject';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //url:string = "https://localhost:7122/api/Students";  

  public student!: IStudent[];  
  public student_subject!: Student_Subject;
  _student!: IStudent;

  // Define the URLs for the different tables
  studentsUrl: string = 'http://localhost:3000/students';
  subjectsUrl: string = 'http://localhost:3000/subjects';

  // Inject the HttpClient service into your component or service
  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(baseURL + 'students/');
  }
  postStudent() {
    return this.http.post(baseURL + 'students/', this._student);
  }
  putStudent() {
    return this.http.put(baseURL + 'students/' + this._student.id, this.student);
  }
  getStudentByID(id: any):Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${baseURL}/students/${id}`);
  }
  getSubjectByID(id: any):Observable<Student_Subject[]> {
    return this.http.get<Student_Subject[]>(`${baseURL}/student_subject/${id}`);
  }
  deleteStudent(id: any) {
    return this.http.delete(`${baseURL}/${id}`);
  }

  // Use forkJoin to combine the results from multiple HTTP requests
  getStudentSubject(stID:any){
    return forkJoin([this.getStudentByID(stID), this.getSubjectByID(stID)]);
  }
  getSubject(id:string):Observable<any>{
    return this.http.get<any>(`${baseURL}/students`)
              .pipe(mergeMap(studentTable=>{return this.http.get<any>(`${baseURL}/student_subject`)
              .pipe(map(subjectTable=>{return studentTable.filter((item: { id: any; })=>{return item.id ===subjectTable.find((stI: { id: string; })=>stI.id===id).id})}))}))
  }
 
}