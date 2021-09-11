import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentTestService } from 'src/app/service/student/student-test.service';

import { ResponseMod } from 'src/app/interfaces/responseMod.interface';
import { TestDetails } from 'src/app/interfaces/student/test-content.interface';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-jump-test',
  templateUrl: './jump-test.component.html',
  styleUrls: ['./jump-test.component.scss']
})
export class JumpTestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private STService: StudentTestService,private message: NzMessageService) { }
  testId: number;
  testType: string;
  testPart: string;
  testDetails: TestDetails[] = [];

  arrValue: Array <any> = [];
  setAnswer(){
    this.STService.postAnswer
    (this.testId,this.testDetails[0].testType,this.testDetails[0].testPart,this.arrValue).subscribe((Response:ResponseMod<string>)=>{
      // alert(Response.msg);
      // window.location.reload();
      this.message.create('success', Response.msg);
      this.getTest();
    });
  }
  getTest(){ 
    this.STService.jumpTest(this.testId).subscribe((testDetails: ResponseMod<TestDetails>)=>{
      this.testDetails=[];
      this.arrValue=[];
      this.testDetails.push(testDetails.data);
      let Value=testDetails.data.arrValueString;
      for(var i=0;i<Value.length;i++){
        if(Value.charAt(i)>= 'A' && Value.charAt(i) <= 'Z'){
          this.arrValue.push(testDetails.data.arrValueString[i]);
        }
      }
    });
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(queryParam => {
      this.testId = queryParam.testId;
      this.testType = queryParam.testType;
      this.testPart = queryParam.testPart;
    });
    this.getTest();
  }
}
