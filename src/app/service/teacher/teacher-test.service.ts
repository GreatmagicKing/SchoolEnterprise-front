import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TeacherTestService{
  constructor(private httpClient: HttpClient){}
  public getTestList(){
    return this.httpClient.post('http://localhost:8080/getTeacherTest',null,{withCredentials: true});
  }
  public releaseTest(testId:number){
    const body={
      testId:testId
    }
    return this.httpClient.post('http://localhost:8080/releaseTest',body,{withCredentials: true});
  }

  public revokeTest(testId:number){
    const body={
      testId:testId
    }
    return this.httpClient.post('http://localhost:8080/revokeTest',body,{withCredentials: true});
  }
  public showTestScore(){
    return this.httpClient.post('http://localhost:8080/showTestScore',null,{withCredentials: true});
  }

  public getTeacherCourse(){
    return this.httpClient.post('http://localhost:8080/getTeacherCourse',null,{withCredentials: true});
  }

  public setTestList(testType,testPart,testName){
    const body = {
      testType:testType,
	    testPart:testPart,
	    testName:testName
    }
    return this.httpClient.post('http://localhost:8080/setTestList',body,{withCredentials: true});
  }
  public getTestProblem(testId){
    const body = {
      testId:testId
    }
    return this.httpClient.post('http://localhost:8080/getTestProblem',body,{withCredentials: true});
  }
  public setTestDetail(testProblem){
    return this.httpClient.post('http://localhost:8080/setTestDetail',testProblem,{withCredentials: true});
  }
}
