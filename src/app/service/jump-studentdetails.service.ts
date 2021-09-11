import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JumpStudentDetailsService{
  constructor(private httpClient: HttpClient){}
  public getStudentDetails(userId: string){
    const body = {
      userId : userId
    };
    return this.httpClient.post('http://localhost:8080/getStudentDetails',body,{withCredentials: true});
  }

  public getQuestionList(userId: string){
    const body = {
      userId : userId
    };
    return this.httpClient.post('http://localhost:8080/getHrQuestionList',body,{withCredentials: true});
  }
  public getAnswerList(userId: string){
    const body = {
      userId : userId
    };
    return this.httpClient.post('http://localhost:8080/getHrAnswerList',body,{withCredentials: true});
  }

}
