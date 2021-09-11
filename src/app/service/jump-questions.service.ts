import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JumpQuestionsService{
  constructor(private httpClient: HttpClient){}
  public jumpQuestions(questionsId: number){
    const body = {
      questionsId : questionsId
    };
    return this.httpClient.post('http://localhost:8080/getQuestionDetails',body,{withCredentials: true});
  }
  public setAnswer(questionId: number, answerData: string){
    const body = {
      questionId : questionId,
      answerData: answerData
    };
    console.log(body);
    return this.httpClient.post('http://localhost:8080/insertQuestionDetails', body,{withCredentials: true});
  }
}
