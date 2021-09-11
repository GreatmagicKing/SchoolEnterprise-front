import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HrStudentService{
  constructor(private httpClient: HttpClient){}
  public getStudentRate(){
    return this.httpClient.post('http://localhost:8080/getStudentRate',null,{withCredentials: true});
  }
  public getUserList(){
    return this.httpClient.post('http://localhost:8080/getUserList',null,{withCredentials: true});
  }
  public setUserList(userId: any,userName: any,role: any){
    const body = {
      userId:userId,
      userName:userName,
      role:role
    };
    return this.httpClient.post('http://localhost:8080/setUserList',body,{withCredentials: true});
  }
  public getAverageScore(){
    return this.httpClient.post('http://localhost:8080/getAverageScore',null,{withCredentials: true});
  }
  public getAcceptanceRate(){
    return this.httpClient.post('http://localhost:8080/getAcceptanceRate',null,{withCredentials: true});
  }
}
