import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HrTeacherService{
  constructor(private httpClient: HttpClient){}
  public getMyInterview(){
    return this.httpClient.post('http://localhost:8080/getMyInterview',null,{withCredentials: true});
  }
  public setMyInterview(userId:string,state:string){
    const body={
      userId:userId,
      state:state
    }
    return this.httpClient.post('http://localhost:8080/setMyInterview',body,{withCredentials: true});
  }
}
