import { Component, OnInit } from '@angular/core';
import { Recruit } from 'src/app/interfaces/hr/recruit.interface';
import { HrInterviewService } from 'src/app/service/hr/hr-interview.service';
import { ResponseMod } from 'src/app/interfaces/responseMod.interface';
import { InterviewR } from 'src/app/interfaces/hr/interviewR.interface';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-hr-interview',
  templateUrl: './hr-interview.component.html',
  styleUrls: ['./hr-interview.component.scss']
})
export class HrInterviewComponent implements OnInit {

  constructor(private HIService: HrInterviewService,private message: NzMessageService) { }



  recruit: Recruit;
  recruitTwo:Recruit;
  interviewR:InterviewR;

  setRecruitHrList: Recruit={
    "[x: string]": "any",
    "userId": "",
    "userName": "",
    "time": "",
    "place": "",
    "teacher": "",
    "state":"",
  };

  getRecruitHrList: Recruit;

  setRecruitTeacherList: Recruit={
    "[x: string]": "any",
    "userId": "",
    "userName": "",
    "time": "",
    "place": "",
    "teacher": "",
    "state":"",
  };
  getRecruitTeacherList: Recruit;

  type:string;


  time: Array <any> = [];
  interviewPlace:Array <any> = [];
  selectedValue:Array <any> = [];

  today = new Date();
  Ttime: Array <any> = [];
  TinterviewPlace:Array <any> = [];
  TselectedValue:Array <any> = [];
  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return current<this.today;
  };
  showTable(type: string){
    this.type=type;
    this.getHrRecruit();
    this.getTeacherRecruit();
    this.getInterviewR();
  }
  getEveryRecruit(){
    this.HIService.getEveryRecruit().subscribe((response:ResponseMod<Recruit>)=>{
      this.recruit=response.data;

    });
  }
  getTwoRecruit(){
    this.HIService.getTwoRecruit().subscribe((response:ResponseMod<Recruit>)=>{
      this.recruitTwo=response.data;
    });
  }
  getInterviewR(){
    this.HIService.getInterviewR().subscribe((response:ResponseMod<InterviewR>)=>{
      console.log(response.data);
      this.interviewR=response.data;
    });
  }
  setInterviewR(userId:string,results:string,i:string){

    this.HIService.setInterviewR(userId,results).subscribe((response:ResponseMod<string>)=>{
      // alert(response.msg);
      this.message.create('success', response.msg);
      if(response.state=='200'){
        // this.interviewR[i].results=results;
        this.getInterviewR();
      }
    });
  }
  getHrRecruit(){
    this.HIService.getHrRecruit().subscribe((response:ResponseMod<Recruit>)=>{
      this.getRecruitHrList=response.data;
    });
  }
  setTeacherRecruit(userId:string,userName:string,i:number){
    this.setRecruitTeacherList.userId=userId;
    this.setRecruitTeacherList.userName=userName;
    this.setRecruitTeacherList.place=this.TinterviewPlace[i];

    this.setRecruitTeacherList.teacher=this.TselectedValue[i];
    this.setRecruitTeacherList.state='0';
    this.setRecruitTeacherList.time=this.time[i];
    this.HIService.setTeacherRecruit(this.setRecruitTeacherList).subscribe((response:ResponseMod<string>)=>{
      // alert(response.msg)
      this.message.create('success', response.msg);
      this.getTwoRecruit();
    });
    this.recruitTwo.splice(i,1);
    if(this.TselectedValue[i]=='teacher01'){
      this.setRecruitTeacherList.teacher='董老师'
    }else if(this.TselectedValue[i]=='teacher02'){
      this.setRecruitTeacherList.teacher='张老师'
    }else if(this.TselectedValue[i]=='teacher03'){
      this.setRecruitTeacherList.teacher='刘老师'
    }else if(this.TselectedValue[i]=='teacher04'){
      this.setRecruitTeacherList.teacher='宋老师'
    }else if(this.TselectedValue[i]=='teacher05'){
      this.setRecruitTeacherList.teacher='尚老师'
    }else if(this.TselectedValue[i]=='teacher06'){
      this.setRecruitTeacherList.teacher='李老师'
    }else if(this.TselectedValue[i]=='teacher07'){
      this.setRecruitTeacherList.teacher='陈老师'
    }else if(this.TselectedValue[i]=='teacher08'){
      this.setRecruitTeacherList.teacher='蒋老师'
    }
    this.getRecruitTeacherList.push(this.setRecruitTeacherList);
    this.TinterviewPlace[i]=null;
    this.TselectedValue[i]=null;
    this.time[i]=null;
  }

  getTeacherRecruit(){
    this.HIService.getTeacherRecruit().subscribe((response:ResponseMod<Recruit>)=>{
      this.getRecruitTeacherList=response.data;
    });
  }
  setHrRecruit(userId:string,userName:string,i:number){
    this.setRecruitHrList.userId=userId;
    this.setRecruitHrList.userName=userName;
    this.setRecruitHrList.place=this.interviewPlace[i];

    this.setRecruitHrList.teacher=this.selectedValue[i];
    this.setRecruitHrList.state='0';
    this.setRecruitHrList.time=this.time[i];
    this.HIService.setHrRecruit(this.setRecruitHrList).subscribe((response:ResponseMod<string>)=>{
      // alert(response.msg)
      this.message.create('success', response.msg);
      this.getEveryRecruit();
    });
    this.recruit.splice(i,1);
    if(this.selectedValue[i]=='hr01'){
      this.setRecruitHrList.teacher='king'
    }else if(this.selectedValue[i]=='hr02'){
      this.setRecruitHrList.teacher='junit'
    }else if(this.selectedValue[i]=='hr03'){
      this.setRecruitHrList.teacher='petty'
    }
    this.getRecruitHrList.push(this.setRecruitHrList);
    this.interviewPlace[i]=null;
    this.selectedValue[i]=null;
    this.time[i]=null;
  }




  onOk(result: Date,i:number): void {

    this.time[i]=result.toLocaleDateString()+result.toLocaleTimeString()
    console.log('Selected Time: ', this.time);
  }
  ngOnInit(): void {
    this.getEveryRecruit();
    this.getHrRecruit();
    this.getTwoRecruit();
    this.getTeacherRecruit();

    this.getInterviewR();
  }

}
