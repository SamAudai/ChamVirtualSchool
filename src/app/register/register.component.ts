import { Component, OnInit } from '@angular/core';
import { classes  } from "../shared/classes";
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { IClassN } from '../shared/classN';
import { IStudent } from '../shared/student';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{    
  
  class_student=classes;
  classname!:IClassN ;
  student!:IStudent; 
  message:boolean = false;
  
  
  constructor(public student_service:StudentService, private router:Router) {
    
  }
  
  ngOnInit() {
    this.student_service._student = {
      id:'',
      firstName:'',
      lastName:'',
      fatherName:'',
      motherName:'',
      image:'',
      birthDate:'',
      eMail:'',
      phoneNumber:'',
      password:'',
      address:'',
      nationatNumber:'',
      studentClass:this.classname
    }
  }

  onSubmit() { 
    this.student_service.postStudent().subscribe(()=>{
      this.student_service.getAllStudents();
      alert("Registration Successful!")
      this.message=true;
      this.resetForm();
      this.router.navigate(['/home']);
    })      

  }

  resetForm(){
      this.student_service._student.id = '',
      this.student_service._student.firstName= '',
      this.student_service._student.lastName= '',
      this.student_service._student.fatherName= '',
      this.student_service._student.motherName= '',
      this.student_service._student.image='',
      //photoPassport: '',
      this.student_service._student.birthDate= '',
      this.student_service._student.eMail= '',
      this.student_service._student.phoneNumber= '',
      this.student_service._student.password= '',
      this.student_service._student.address= '',
      this.student_service._student.nationatNumber= ''
      //photoCard: '',
      //this.student_service._student.studentClass=this.classname   
      
  }

}
