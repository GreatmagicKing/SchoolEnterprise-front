import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentCoursesComponent } from './student/student-courses/student-courses.component';
import { LoginComponent } from './login/login.component';
import { StudentInterviewComponent } from './student/student-interview/student-interview.component';
import { StudentQuestionsComponent } from './student/student-questions/student-questions.component';
import { StudentTestComponent } from './student/student-test/student-test.component';
import { JumpQuestionsComponent } from './jump/jump-questions/jump-questions.component';
import { JumpTestComponent } from './jump/jump-test/jump-test.component';
import { StudentHeaderComponent } from './student/student-header/student-header.component';
import { TeacherHeaderComponent } from './teacher/teacher-header/teacher-header.component';
import { TeacherQuestionComponent } from './teacher/teacher-question/teacher-question.component';
import { TeacherCoursesComponent } from './teacher/teacher-courses/teacher-courses.component';
import { TeacherTestComponent } from './teacher/teacher-test/teacher-test.component';
import { TeacherInterviewComponent } from './teacher/teacher-interview/teacher-interview.component';
import { HrHeaderComponent } from './hr/hr-header/hr-header.component';
import { HrTeacherComponent } from './hr/hr-teacher/hr-teacher.component';
import { HrStudentComponent } from './hr/hr-student/hr-student.component';
import { JumpStudentdetailsComponent } from './jump/jump-studentdetails/jump-studentdetails.component';
import { HrInterviewComponent } from './hr/hr-interview/hr-interview.component';
import { StudentAuthGuard } from './auth/student.guard';
import { TeacherAuthGuard } from './auth/teacher.guard';
import { HrAuthGuard } from './auth/hr.guard';
import { TestComponent } from './testuse/test/test.component';
import { HrPersonnelComponent } from './hr/hr-personnel/hr-personnel.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'student', component: StudentHeaderComponent, canActivate:[StudentAuthGuard],
    children: [
      {path: 'student-courses', component: StudentCoursesComponent, canActivate:[StudentAuthGuard]},
      {path: 'student-interview', component: StudentInterviewComponent, canActivate:[StudentAuthGuard]},
      {path: 'student-questions', component: StudentQuestionsComponent, canActivate:[StudentAuthGuard]},
      {path: 'student-test', component: StudentTestComponent, canActivate:[StudentAuthGuard]}

  ]},
  {path: 'teacher', component: TeacherHeaderComponent, canActivate:[TeacherAuthGuard],
    children: [
      {path: 'teacher-courses', component: TeacherCoursesComponent, canActivate:[TeacherAuthGuard]},
      {path: 'teacher-questions', component: TeacherQuestionComponent, canActivate:[TeacherAuthGuard]},
      {path: 'teacher-test', component: TeacherTestComponent, canActivate:[TeacherAuthGuard]},
      {path: 'teacher-interview', component: TeacherInterviewComponent, canActivate:[TeacherAuthGuard]},

  ]},
  {path: 'hr', component: HrHeaderComponent,canActivate:[HrAuthGuard],
    children: [
      {path: 'hr-student', component: HrStudentComponent,canActivate:[HrAuthGuard]},
      {path: 'hr-teacher', component: HrTeacherComponent,canActivate:[HrAuthGuard]},
      {path: 'hr-interview', component: HrInterviewComponent,canActivate:[HrAuthGuard]},
      {path: 'hr-personnel', component: HrPersonnelComponent,canActivate:[HrAuthGuard]},
  ]},
  {path: 'jump-questions', component: JumpQuestionsComponent},
  {path: 'jump-test', component: JumpTestComponent},
  {path: 'jump-studentdetails', component: JumpStudentdetailsComponent},

  {path: 'testuse', component: TestComponent},
  // {path: 'details', component: DetailsComponent, canActivate: [AuthGuard]},
  // {path: 'books', component: BooksComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
