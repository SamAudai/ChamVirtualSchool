import { Degree } from "./degree";
import { Exam } from "./exam";
import { IClassN } from "./classN";
import { Teacher } from "./teacher";
import { IStudent } from "./student";


export interface ISubject { 
    id:string;   
    name: string;
    //link!:string;
    //material!:string; //store path for each subject material
    degrees:Degree;
    //lesson!:Lesson;
    exam:Exam;
    sClass:IClassN;
    sTeacher:Teacher;
    sStudent:IStudent[];       
}