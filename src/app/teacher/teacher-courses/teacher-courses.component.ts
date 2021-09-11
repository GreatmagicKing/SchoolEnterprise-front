import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StudentScore } from 'src/app/interfaces/teacher/student-score.interface';
import { TeacherCoursesService } from 'src/app/service/teacher/teacher-courses.service';
import { ResponseMod } from 'src/app/interfaces/responseMod.interface';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-teacher-courses',
  templateUrl: './teacher-courses.component.html',
  styleUrls: ['./teacher-courses.component.scss']
})

export class TeacherCoursesComponent implements OnInit {



  StudentScoreData: StudentScore;

  validateForm: FormGroup;

  type:string;
  isVisible = false;

  i:number;
  constructor(private fb: FormBuilder, private TCService: TeacherCoursesService,private message: NzMessageService) {}

  showTable(type:string){
    this.type=type;
  }
  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.isVisible = false;

    if(this.validateForm.get("homeworkOne").value!=null){
      this.StudentScoreData[this.i].homeworkOne=this.validateForm.get("homeworkOne").value;
    }
    if(this.validateForm.get("homeworkTwo").value!=null){
      this.StudentScoreData[this.i].homeworkTwo=this.validateForm.get("homeworkTwo").value;
    }
    if(this.validateForm.get("homeworkThree").value!=null){
      this.StudentScoreData[this.i].homeworkThree=this.validateForm.get("homeworkThree").value;
    }
    if(this.validateForm.get("homeworkBig").value!=null){
      this.StudentScoreData[this.i].homeworkBig=this.validateForm.get("homeworkBig").value;
    }

    // console.log(this.StudentScoreData[this.i]);
    this.TCService.setScore(this.StudentScoreData[this.i]).subscribe((response: ResponseMod<string>)=>{
      console.log(this.i);
      this.message.create('success', response.msg);
    });
    this.validateForm.reset();
  }
  ScoreValidator = (control: FormControl): { [s: string]: boolean } => {
    if (control.value>100||control.value<0) {
      return { maxLength: true, error: true };
    }
    return {};
  }


  showModal(i:number): void {
    console.log(i);

    this.isVisible = true;
    this.i=i;
  }

  // handleOk(): void {
  //   console.log('Button ok clicked!');
  //   this.isVisible = false;
  // }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  ngOnInit(): void {
    // this.type = '1';
    this.TCService.getScore().subscribe((response: ResponseMod<StudentScore> )=>{
      this.StudentScoreData= response.data;
    });

    this.validateForm = this.fb.group({
      homeworkOne: [null, [this.ScoreValidator]],
      homeworkTwo: [null, [this.ScoreValidator]],
      homeworkThree: [null, [this.ScoreValidator]],
      homeworkBig: [null, [this.ScoreValidator]]
    });
  }








}
