import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentInterviewService{
  constructor(private httpClient: HttpClient){}
  public getOneInterview(){
    return this.httpClient.post('http://localhost:8080/getOneInterview',null,{withCredentials: true});
  }
  public getTwoInterview(){
    return this.httpClient.post('http://localhost:8080/getTwoInterview',null,{withCredentials: true});
  }
  public getResultInterview(){
    return this.httpClient.post('http://localhost:8080/getResultInterview',null,{withCredentials: true});
  }
}
