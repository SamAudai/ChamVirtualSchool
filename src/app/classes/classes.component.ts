import { Component, OnInit } from '@angular/core';
import { ClassService } from '../services/class.service';
import { IClassN } from '../shared/classN';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit{

  classes!:IClassN[];

  constructor(public service:ClassService) { }

  ngOnInit(): void {
    this.service.getAllClasses().subscribe(classes=>this.classes =classes);
  }

}
