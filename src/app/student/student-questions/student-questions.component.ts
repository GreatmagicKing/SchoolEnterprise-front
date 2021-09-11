import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { StudentQuestionsService } from 'src/app/service/student/student-questions.service';
import { Questions } from 'src/app/interfaces/Questions/questions.interface';
import { Router } from '@angular/router';
import { ResponseMod } from 'src/app/interfaces/responseMod.interface';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-student-questions',
  templateUrl: './student-questions.component.html',
  styleUrls: ['./student-questions.component.scss']
})
export class StudentQuestionsComponent implements OnInit , AfterViewInit{

  constructor(
    private SQService: StudentQuestionsService,
    private router: Router,
    private message: NzMessageService) {
    }

  title: string;
  text: string;
  type: string;
  questionsType: string;
  questions: Questions;

  setQuestions(){
    this.SQService.setQuestions(this.title , this.text, this.questionsType).subscribe((response:ResponseMod<string>)=>{
      this.message.create('success', `提问成功`);
      this.getQuestions();
    });
  }
  showQuestions(type: string){
    this.type = type;
  }
  getQuestions(){
    this.SQService.getQuestionList().subscribe((response: ResponseMod<Questions> ) => {
      this.questions = response.data;
    });
  }
  jumpQuestions(id: number){
    this.router.navigate(['/jump-questions'], {
      queryParams: {
        id
      }
    });
  }
  ngOnInit(): void {
    this.type = '1';
    this.questionsType = '类型';
    this.getQuestions();
  }
  ngAfterViewInit(): void {

  }
}
