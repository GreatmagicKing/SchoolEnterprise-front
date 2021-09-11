import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recruit } from 'src/app/interfaces/hr/recruit.interface';
import { InterviewR } from 'src/app/interfaces/hr/interviewR.interface';

@Injectable()
export class HrInterviewService{
  constructor(private httpClient: HttpClient){}
  public getEveryRecruit(){
    return this.httpClient.post('http://localhost:8080/getEveryRecruit',null,{withCredentials: true});
  }
  public getTwoRecruit(){
    return this.httpClient.post('http://localhost:8080/getTwoRecruit',null,{withCredentials: true});
  }
  public getHrRecruit(){
    return this.httpClient.post('http://localhost:8080/getHrRecruit',null,{withCredentials: true});
  }
  public setHrRecruit(recruit: Recruit){
    return this.httpClient.post('http://localhost:8080/setHrRecruit',recruit,{withCredentials: true});
  }
  public getTeacherRecruit(){
    return this.httpClient.post('http://localhost:8080/getTeacherRecruit',null,{withCredentials: true});
  }
  public setTeacherRecruit(recruit: Recruit){
    return this.httpClient.post('http://localhost:8080/setTeacherRecruit',recruit,{withCredentials: true});
  }
  public getInterviewR(){
    return this.httpClient.post('http://localhost:8080/getInterviewR',null,{withCredentials: true});
  }
  public setInterviewR(userId:string,results:string){
    const body = {
      userId:userId,
      results:results
    };
    
    return this.httpClient.post('http://localhost:8080/setInterviewR',body,{withCredentials: true});
  }
}
