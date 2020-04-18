import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentCanDeactivateGardService } from './student/create-student-can-deactivate-guard.service';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path :'student',component:StudentComponent, canDeactivate:[CreateStudentCanDeactivateGardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

