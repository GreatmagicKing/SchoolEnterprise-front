import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TeacherInterviewService{
  constructor(private httpClient: HttpClient){}
  public getTeacherInterview(){
    return this.httpClient.post('http://localhost:8080/getTeacherInterview',null,{withCredentials: true});
  }
  public setTeacherInterview(userId:string,state:string){
    const body={
      userId:userId,
      state:state
    }
    return this.httpClient.post('http://localhost:8080/setTeacherInterview',body,{withCredentials: true});
  }
}
