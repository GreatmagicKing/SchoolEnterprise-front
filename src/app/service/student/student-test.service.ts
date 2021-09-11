import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentTestService{
  constructor(private httpClient: HttpClient){}
  public getStudentTest(){
    return this.httpClient.post('http://localhost:8080/getTestList',null,{withCredentials: true});
  }
  public jumpTest(testId: number){
    const body = {
      testId : testId
    };
    return this.httpClient.post('http://localhost:8080/getTestDetails',body,{withCredentials: true});
  }
  public postAnswer(testId: number,testType: string,testPart: string ,arrValue: Array<any>){
    const body = {
      testId : testId,
      testType: testType,
      testPart: testPart,
      arrValue: arrValue

    };
    return this.httpClient.post('http://localhost:8080/setTestAnswer',body,{withCredentials: true});
  }
}
