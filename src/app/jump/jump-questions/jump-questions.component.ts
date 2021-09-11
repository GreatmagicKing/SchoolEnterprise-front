import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JumpQuestionsService } from 'src/app/service/jump-questions.service';
import { QuestionsDetails } from 'src/app/interfaces/Questions/questions-details.interface';
import { ResponseMod } from 'src/app/interfaces/responseMod.interface';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-jump-questions',
  templateUrl: './jump-questions.component.html',
  styleUrls: ['./jump-questions.component.scss']
})
export class JumpQuestionsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private JQService: JumpQuestionsService,
    private router: Router,
    private message: NzMessageService
  ) { }
  id: number;
  qDetails : QuestionsDetails[]=[];

  Data: string;
  setAnswer(){
    this.JQService.setAnswer(this.id ,this.Data).subscribe((response:ResponseMod<string>)=>{
      // alert(response.msg);
      this.message.create('success', response.msg);
      // window.location.reload();
      this.getAnswer();
    });
  }
  getAnswer(){
    this.JQService.jumpQuestions(this.id).subscribe((qDetails : ResponseMod<QuestionsDetails>) => {
      this.qDetails=[];
      this.qDetails.push (qDetails.data);
    });
  }
  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(queryParam => {
      this.id = queryParam.id;
    });
    this.getAnswer();

  }

}
