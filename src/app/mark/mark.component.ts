import { Component, Input, OnInit } from '@angular/core';
import { IStudent } from '../shared/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit{
  public student!: IStudent;
  
  constructor(private studentService:StudentService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }


}
