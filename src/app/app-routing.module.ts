import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { ClassesComponent } from './classes/classes.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SProfileComponent } from './s-profile/s-profile.component';
import { MarkComponent } from './mark/mark.component';

const routes: Routes = [
  {          //this is default route
    path: '',      
    redirectTo: '/home',    
    pathMatch: 'full'
  },
  {           //this is home route
    path: "home",
    component: HomeComponent,
    pathMatch: 'full'  
  },
  {          //this is register route
    path: "register",
    component: RegisterComponent,
    pathMatch: 'full' 
  },
  {          //this is class route
    path: "classes",
    component: ClassesComponent,
    pathMatch: 'full' 
  },
  {          //this is student route
    path: "students",
    component: StudentComponent,
    pathMatch: 'full' 
  },
  {          //this is student route
    path: "student profile",
    component: SProfileComponent,
    pathMatch: 'full' 
  },
  {          //this is student route
    path: "teachers",
    component: TeacherComponent,
    pathMatch: 'full' 
  },
  {          //this is student route
    path: "mark",
    component: MarkComponent,
    pathMatch: 'full' 
  },  
  {        //wildcard route  ... this is pagenotfound route
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
