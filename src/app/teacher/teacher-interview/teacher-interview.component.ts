import { Component, OnInit } from '@angular/core';
import { ResponseMod } from 'src/app/interfaces/responseMod.interface';
import { Recruit } from 'src/app/interfaces/hr/recruit.interface';
import { TeacherInterviewService } from 'src/app/service/teacher/teacher-interview.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-teacher-interview',
  templateUrl: './teacher-interview.component.html',
  styleUrls: ['./teacher-interview.component.scss']
})
export class TeacherInterviewComponent implements OnInit {

  constructor(private TIService: TeacherInterviewService,private message: NzMessageService) { }

  type: string;
  recruit: Recruit;
  showTable(type: string){
    this.type=type;
  }
  getTeacherInterview(){
    this.TIService.getTeacherInterview().subscribe((response: ResponseMod<Recruit>) => {
      this.recruit = response.data;
    });
  }
  setTeacherInterview(userId:string,state:string,i:string){
    this.TIService.setTeacherInterview(userId,state).subscribe((response: ResponseMod<string>)=>{
      // alert(response.msg);
      this.message.create('success', response.msg);
      if(response.state == '200'){
        // this.recruit[i].state = state;
        this.getTeacherInterview();
      }
    });
  }
  ngOnInit(): void {
    this.getTeacherInterview();
  }

}
