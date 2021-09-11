import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentQuestionsService{
  constructor(private httpClient: HttpClient){}
  public getQuestionList(){
    return this.httpClient.post('http://localhost:8080/getQuestionList', null,{withCredentials: true});
  }

  public setQuestions(QuestionsTitle: string, QuestionsData: string, QuestionsType: string){
    const body = {
      questionsTitle : QuestionsTitle,
      questionsType : QuestionsType,
      questionsData: QuestionsData
    };

    return this.httpClient.post('http://localhost:8080/setQuestionList', body,{withCredentials: true});
  }
}
