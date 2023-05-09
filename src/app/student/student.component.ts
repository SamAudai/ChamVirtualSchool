import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { IStudent } from '../shared/student';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  
  students!:IStudent[];
  

  constructor(private studentService:StudentService){}

  ngOnInit(): void {    
    this.studentService.getAllStudents().subscribe(res=>this.students=res);
  }

}
