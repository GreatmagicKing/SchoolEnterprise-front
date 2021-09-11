import { Component, OnInit } from '@angular/core';
import { TestList } from 'src/app/interfaces/student/test-list.interface';
import { TeacherTestService } from 'src/app/service/teacher/teacher-test.service';
import { ResponseMod } from 'src/app/interfaces/responseMod.interface';
import { StudentScore } from 'src/app/interfaces/teacher/student-score.interface';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherCourse } from 'src/app/interfaces/teachercourse';
import { TestProblem } from 'src/app/interfaces/TestProblem';

@Component({
  selector: 'app-teacher-test',
  templateUrl: './teacher-test.component.html',
  styleUrls: ['./teacher-test.component.scss']
})
export class TeacherTestComponent implements OnInit {

  constructor(private fb: FormBuilder, private TTService: TeacherTestService, private message: NzMessageService) { }
  inputValue:string;
  testResult:string;

  validateForm: FormGroup;
  testList: TestList;
  studentScore: StudentScore;
  type: string;
  testType: string;
  testPart = "1";
  testName: string;
  listOfData =[];
  teacherCourse:TeacherCourse;
  testProblem:TestProblem;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  showTable(type: string) {
    this.type = type;
    // console.log(this.type);
  }
  getTestList() {
    this.TTService.getTestList().subscribe((response: ResponseMod<TestList>) => {
      this.testList = response.data;
    });
  }
  showTestScore() {
    this.TTService.showTestScore().subscribe((response: ResponseMod<StudentScore>) => {
      this.studentScore = response.data;
    });
  }
  release(testId: number, i: number) {
    this.TTService.releaseTest(testId).subscribe((response: ResponseMod<string>) => {
      // alert(response.msg);
      this.message.create('success', response.msg);
    });
    this.testList[i].state = '1';
  }
  revoke(testId: number, i: number) {
    this.TTService.revokeTest(testId).subscribe((response: ResponseMod<string>) => {
      // alert(response.msg);
      this.message.create('success', response.msg);
    });
    this.testList[i].state = '0';
  }
  getTeacherCourse(){
    this.TTService.getTeacherCourse().subscribe((response: ResponseMod<TeacherCourse>) => {
      this.teacherCourse=response.data;
    });
  }
  setTestList(){
    this.TTService.setTestList(this.teacherCourse.courseId,this.testPart,this.testName).subscribe((response: ResponseMod<string>) => {
      this.message.create('success', response.msg);
      this.getTestList();
    });
  }
  getTestProblem(testId){
    this.TTService.getTestProblem(testId).subscribe((response: ResponseMod<TestProblem>) => {
      this.testProblem = response.data;
      console.log(this.testProblem);
      this.type="4";
      this.message.create('success', response.msg);
    });
  }
  setTestDetail(testProblem){
    this.TTService.setTestDetail(testProblem).subscribe((response: ResponseMod<TestProblem>) => {
      this.message.create('success', response.msg);
    });
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      // testType: [null, [Validators.required]],
      testPart: [null, [Validators.required]],
      testName: [null, [Validators.required]],
    });
    this.getTeacherCourse();
    this.getTestList();
    this.showTestScore();
  }

}
