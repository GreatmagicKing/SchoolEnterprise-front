import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/interfaces/student/score.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { JumpStudentDetailsService } from 'src/app/service/jump-studentdetails.service';
import { ResponseMod } from 'src/app/interfaces/responseMod.interface';
import { Questions } from 'src/app/interfaces/Questions/questions.interface';

@Component({
  selector: 'app-jump-studentdetails',
  templateUrl: './jump-studentdetails.component.html',
  styleUrls: ['./jump-studentdetails.component.scss']
})
export class JumpStudentdetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private SDService: JumpStudentDetailsService,
    private router: Router)
  {

  }


  answer: Questions;
  questions: Questions;
  type: string;
  score: Score;
  userId: string;
  showTable(type: string){
    this.type=type;
    
  }
  getGrade(){
    this.SDService.getStudentDetails(this.userId).subscribe((response:ResponseMod<Score>)=>{
      this.score=response.data;
    });
  }
  getQuestions(){
    this.SDService.getQuestionList(this.userId).subscribe((response: ResponseMod<Questions> ) => {
      this.questions = response.data;
    });
  }
  getAnswer(){
    this.SDService.getAnswerList(this.userId).subscribe((response: ResponseMod<Questions> ) => {
      this.answer = response.data;
      console.log(this.answer);
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

    this.activatedRoute.queryParams.subscribe(queryParam => {
      this.userId = queryParam.userId;
    });
    this.getGrade();
    this.getQuestions();
    this.getAnswer();

  }

}
