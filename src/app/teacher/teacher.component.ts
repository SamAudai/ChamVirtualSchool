import { Component, OnInit } from '@angular/core';
import { Teacher } from '../shared/teacher';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{

  teachers!:Teacher[];

  constructor(private teacherService:TeacherService){}
  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe(teacher=>this.teachers=teacher)
  }

}
