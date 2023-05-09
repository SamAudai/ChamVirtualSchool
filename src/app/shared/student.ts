import { IClassN } from "./classN";

export interface IStudent{
    id:string;
	firstName:string;
	lastName:string;
	fatherName:string;
	motherName:string;	
	image:string;
	//photoPassport!:string;	
	birthDate:string;
	eMail:string;
	phoneNumber:string;
	password:string;
	address:string;
	nationatNumber:string;
	//photoCard!:string;	
	studentClass:IClassN;	
}