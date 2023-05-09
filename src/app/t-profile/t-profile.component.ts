import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { ISubject } from '../shared/subject';
import { IStudent } from '../shared/student';
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-t-profile',
  templateUrl: './t-profile.component.html',
  styleUrls: ['./t-profile.component.css']
})
export class TProfileComponent  implements OnInit {
  
  teacher = localStorage.getItem('User Name');
  degreeSubject!:ISubject[];
  student!:IStudent[];

  constructor(private teacherService:TeacherService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.teacherService.getAllGreeds().subscribe(res=>this.degreeSubject=res)
  }

}
