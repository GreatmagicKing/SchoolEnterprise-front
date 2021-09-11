import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentCoursesService{
  constructor(private httpClient: HttpClient){}
  // public getStudentCourses(){
  //   return this.httpClient.get('assets/JsonText/getStudentCourses.json');
  // }
  // public getStudentTest(){
  //   return this.httpClient.get('assets/JsonText/getStudentTest.json');
  // }
  public getScore(){
    return this.httpClient.post('http://localhost:8080/getStudentCourses',null,{withCredentials: true});
  }
}
