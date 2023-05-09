import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule} from "@angular/material/datepicker";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ClassesComponent } from './classes/classes.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SProfileComponent } from './s-profile/s-profile.component';
import { TProfileComponent } from './t-profile/t-profile.component';
import { MarkComponent } from './mark/mark.component';

@NgModule({
  declarations: [
    AppComponent,       
    HeaderComponent, 
    FooterComponent, 
    PagenotfoundComponent, 
    HomeComponent, 
    LoginComponent, RegisterComponent, ClassesComponent, StudentComponent, TeacherComponent, SProfileComponent, TProfileComponent, MarkComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,    
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,    
    MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    FlexLayoutModule   
      
  ],
  providers: [],
  entryComponents: [
    LoginComponent    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
