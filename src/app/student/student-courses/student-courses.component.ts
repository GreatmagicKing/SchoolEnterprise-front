import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HomeWork } from 'src/app/interfaces/student/homework.interface';
import { Test } from 'src/app/interfaces/student/test.interface';
import { StudentCoursesService } from 'src/app/service/student/student-courses.service';
import { Score } from 'src/app/interfaces/student/score.interface';
import { ResponseMod } from 'src/app/interfaces/responseMod.interface';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss']
})
export class StudentCoursesComponent implements OnInit, AfterViewInit{

  constructor(private scService: StudentCoursesService, private renderer: Renderer2) {
  }
  type: string;
  homeworkG: HomeWork;
  testG: Test;
  score: Score;

  @ViewChild('homeworkGrade')
  homeworkGrade: ElementRef;
  @ViewChild('testGrade')
  testGrade: ElementRef;


  showGrade(type: string){
    this.type = type;
    if (type== '1'){
      this.renderer.setStyle(this.homeworkGrade.nativeElement, 'display', 'table');
      this.renderer.setStyle(this.testGrade.nativeElement, 'display', 'none');
    }else{
      this.renderer.setStyle(this.homeworkGrade.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.testGrade.nativeElement, 'display', 'table');
    }
  }

  getGrade(){
    // this.scService.getStudentCourses().subscribe((homeworkG: HomeWork) => {
    //   this.homeworkG = homeworkG;
    //   console.log(this.homeworkG);
    // });
    // this.scService.getStudentTest().subscribe((testG: Test) => {
    //   this.testG = testG;
    // });

    this.scService.getScore().subscribe((response: ResponseMod<Score>)=>{
      this.score = response.data;
      
    });
  }

  ngOnInit(): void {
    this.type = '1';
    this.getGrade();


  }
  ngAfterViewInit(): void {
    this.showGrade('1');
  }
}
