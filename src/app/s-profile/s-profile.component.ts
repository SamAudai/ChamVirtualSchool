import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-s-profile',
  templateUrl: './s-profile.component.html',
  styleUrls: ['./s-profile.component.css']
})
export class SProfileComponent implements OnInit {
  user = localStorage.getItem('User Name');
  element: any;

  //public res=fetch(`http://localhost:3000/students/${this.student.id}`);

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentSubject("2").subscribe(data => {
      this.element =data
    });
  }
}

