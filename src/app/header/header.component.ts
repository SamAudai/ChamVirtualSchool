import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(public dialog: MatDialog ){}

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '300px', position: {top: '20px'} });
  }
  openRegisterForm() {
    this.dialog.open(RegisterComponent, {width: '600px',position: {top: '20px'} });
  }

}
