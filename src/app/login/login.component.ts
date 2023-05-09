import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  
  public loginForm!:FormGroup

  constructor(public dialogRef: MatDialogRef<LoginComponent>, 
              private http:HttpClient, 
              private router:Router) { }

  ngOnInit(): void {
   this.loginForm=new FormGroup({
    'eMail' :  new FormControl,
    'password': new FormControl,
    'firstName':new FormControl,
    'lastName':new  FormControl
   })
  }

  onSubmit() {
    this.http.get<any>(baseURL + 'students').subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.eMail === this.loginForm.value.eMail && a.password === this.loginForm.value.password || a.firstName === this.loginForm.value.firstName|| a.lastName === this.loginForm.value.lastName 
      }); 
      if(user){
        this.dialogRef.close();
        alert("Login Successful!");
        this.loginForm.reset();
        localStorage.setItem('User Name',user.firstName );                     
        this.router.navigate(['/student profile']);
      }
      else{
        this.dialogRef.close(); 
        alert('Login Failed!')        
        this.router.navigate(['/home']);
      }
    })
  }

}
