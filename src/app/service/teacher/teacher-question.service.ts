import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TeacherQuestionService{
  constructor(private httpClient: HttpClient){}
  public getQuestionList(){
    return this.httpClient.post('http://localhost:8080/getTeacherQuestion',null,{withCredentials: true});
  }
}
