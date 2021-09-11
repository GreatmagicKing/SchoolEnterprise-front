import { Component, OnInit } from '@angular/core';
import { ResponseMod } from 'src/app/interfaces/responseMod.interface';
import { Recruit } from 'src/app/interfaces/hr/recruit.interface';
import { StudentInterviewService } from 'src/app/service/student/student-interview.service';

@Component({
  selector: 'app-student-interview',
  templateUrl: './student-interview.component.html',
  styleUrls: ['./student-interview.component.scss']
})
export class StudentInterviewComponent implements OnInit {

  constructor(private SIService: StudentInterviewService) { }

  type: string;
  recruitOne: Recruit;
  recruitTwo: Recruit;
  recruitResult: Recruit;
  showTable(type: string){
    this.type=type;
  }
  getOneInterview(){
    this.SIService.getOneInterview().subscribe((response: ResponseMod<Recruit>) => {
      this.recruitOne = response.data;
    });
  }
  getTwoInterview(){
    this.SIService.getTwoInterview().subscribe((response: ResponseMod<Recruit>) => {
      this.recruitTwo = response.data;
    });
  }
  getResultInterview(){
    this.SIService.getResultInterview().subscribe((response: ResponseMod<Recruit>) => {
      this.recruitResult = response.data;
    });
  }
  ngOnInit(): void {
    this.getOneInterview();
    this.getTwoInterview();
    this.getResultInterview();
  }

}
