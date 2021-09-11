import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentCoursesComponent } from './student/student-courses/student-courses.component';
import { StudentQuestionsComponent } from './student/student-questions/student-questions.component';
import { StudentTestComponent } from './student/student-test/student-test.component';
import { StudentInterviewComponent } from './student/student-interview/student-interview.component';
import { StudentHeaderComponent } from './student/student-header/student-header.component';
import { StudentCoursesService } from './service/student/student-courses.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentQuestionsService } from './service/student/student-questions.service';
import { JumpQuestionsComponent } from './jump/jump-questions/jump-questions.component';
import { JumpQuestionsService } from './service/jump-questions.service';
import { StudentTestService } from './service/student/student-test.service';
import { JumpTestComponent } from './jump/jump-test/jump-test.component';
import { LoginService } from './service/login.service';
import { TeacherCoursesComponent } from './teacher/teacher-courses/teacher-courses.component';
import { TeacherHeaderComponent } from './teacher/teacher-header/teacher-header.component';
import { TeacherQuestionComponent } from './teacher/teacher-question/teacher-question.component';
import { TeacherTestComponent } from './teacher/teacher-test/teacher-test.component';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TeacherCoursesService } from './service/teacher/teacher-courses.service';
import { TeacherQuestionService } from './service/teacher/teacher-question.service';
import { TeacherTestService } from './service/teacher/teacher-test.service';
import { TeacherInterviewComponent } from './teacher/teacher-interview/teacher-interview.component';
import { HrHeaderComponent } from './hr/hr-header/hr-header.component';
import { HrTeacherComponent } from './hr/hr-teacher/hr-teacher.component';
import { HrStudentComponent } from './hr/hr-student/hr-student.component';
import { HrStudentService } from './service/hr/hr-student.service';
import { JumpStudentdetailsComponent } from './jump/jump-studentdetails/jump-studentdetails.component';
import { JumpStudentDetailsService } from './service/jump-studentdetails.service';
import { HrInterviewComponent } from './hr/hr-interview/hr-interview.component';
import { HrTeacherService } from './service/hr/hr-teacher.service';
import { HrInterviewService } from './service/hr/hr-interview.service';
import { TeacherInterviewService } from './service/teacher/teacher-interview.service';
import { StudentInterviewService } from './service/student/student-interview.service';
import { HttpInterceptor } from './auth/http.Interceptor';
import { TestComponent } from './testuse/test/test.component';
import { TestoneComponent } from './testuse/testone/testone.component';
import { HrPersonnelComponent } from './hr/hr-personnel/hr-personnel.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    StudentCoursesComponent,
    StudentQuestionsComponent,
    StudentTestComponent,
    StudentInterviewComponent,
    StudentHeaderComponent,
    JumpQuestionsComponent,
    JumpTestComponent,
    TeacherCoursesComponent,
    TeacherHeaderComponent,
    TeacherQuestionComponent,
    TeacherTestComponent,
    TeacherInterviewComponent,
    HrHeaderComponent,
    HrTeacherComponent,
    HrStudentComponent,
    JumpStudentdetailsComponent,
    HrInterviewComponent,
    TestComponent,
    TestoneComponent,
    HrPersonnelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzGridModule,
    NzButtonModule,
    NzTypographyModule,
    NzRadioModule,
    NzDividerModule,
    NzFormModule,
    NzIconModule.forRoot(icons),
    NzInputModule,
    BrowserAnimationsModule,
    NzMenuModule,
    NzTableModule,
    NzPaginationModule,
    NzModalModule,
    NzMessageModule,
    NzSelectModule,
    NzDatePickerModule,
    NzCollapseModule,
    NzAvatarModule
  ],
  providers: [
    StudentCoursesService,
    StudentQuestionsService,
    JumpQuestionsService,
    StudentTestService,
    StudentInterviewService,
    LoginService,
    TeacherCoursesService,
    TeacherQuestionService,
    TeacherTestService,
    TeacherInterviewService,
    HrStudentService,
    JumpStudentDetailsService,
    HrTeacherService,
    HrInterviewService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
