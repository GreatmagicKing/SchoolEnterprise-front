import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from 'src/app/interfaces/Questions/questions.interface';
import { ResponseMod } from 'src/app/interfaces/responseMod.interface';
import { TeacherQuestionService } from 'src/app/service/teacher/teacher-question.service';

@Component({
  selector: 'app-teacher-question',
  templateUrl: './teacher-question.component.html',
  styleUrls: ['./teacher-question.component.scss']
})
export class TeacherQuestionComponent implements OnInit {

  constructor(private router: Router,private TQService: TeacherQuestionService) { }

  questions: Questions;
  type:string;
  showTable(type:string){
    this.type=type;
  }

  getQuestions(){
    this.TQService.getQuestionList().subscribe((response: ResponseMod<Questions> ) => {
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
    this.getQuestions();
  }

}
