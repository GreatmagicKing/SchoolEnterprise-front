import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentScore } from 'src/app/interfaces/teacher/student-score.interface';

@Injectable()
export class TeacherCoursesService{
  constructor(private httpClient: HttpClient){}
  public getScore(){
    return this.httpClient.post('http://localhost:8080/getTeacherCourses',null,{withCredentials: true});
  }
  public setScore(studentScore: StudentScore){
    return this.httpClient.post('http://localhost:8080/setTeacherCourses',studentScore,{withCredentials: true});
  }
}
