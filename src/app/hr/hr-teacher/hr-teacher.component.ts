import { Component, OnInit } from '@angular/core';
import { Recruit } from 'src/app/interfaces/hr/recruit.interface';
import { HrTeacherService } from 'src/app/service/hr/hr-teacher.service';
import { ResponseMod } from 'src/app/interfaces/responseMod.interface';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-hr-teacher',
  templateUrl: './hr-teacher.component.html',
  styleUrls: ['./hr-teacher.component.scss']
})
export class HrTeacherComponent implements OnInit {

  constructor(private HTService: HrTeacherService,private message: NzMessageService) { }

  type: string;
  recruit: Recruit;
  showTable(type: string){
    this.type=type;
  }
  getMyInterview(){
    this.HTService.getMyInterview().subscribe((response: ResponseMod<Recruit>) => {
      this.recruit = response.data;
    });
  }
  setMyInterview(userId:string,state:string,i:string){
    console.log(userId);
    console.log(state);
    console.log(i);
    this.HTService.setMyInterview(userId,state).subscribe((response: ResponseMod<string>)=>{
      // alert(response.msg);
      this.message.create('success', response.msg);
      if(response.state == '200'){
        // this.recruit[i].state = state;
        this.getMyInterview();
      }
    });
  }
  ngOnInit(): void {
    this.getMyInterview();
  }

}
