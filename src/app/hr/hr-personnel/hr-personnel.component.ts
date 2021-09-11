import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { ResponseMod } from 'src/app/interfaces/responseMod.interface';
import { userList } from 'src/app/interfaces/uselist';
import { HrStudentService } from 'src/app/service/hr/hr-student.service';

@Component({
  selector: 'app-hr-personnel',
  templateUrl: './hr-personnel.component.html',
  styleUrls: ['./hr-personnel.component.scss']
})
export class HrPersonnelComponent implements OnInit {

  validateForm: FormGroup;
  type:string;
  userTypeValue="1";
  listOfData = new Array<userList>();
  result:string;
  userName:string;
  userId:string;
  constructor(private fb: FormBuilder,
    private HSService: HrStudentService,private message: NzMessageService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userType: [null, [Validators.required]],
      userId: [null, [Validators.required]],
      userName: [null, [Validators.required]],
    });
    this.getUserList();
  }

  showTable(type:string){
    this.type=type;
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  getUserList(){
    this.HSService.getUserList().subscribe((response:ResponseMod<Array<userList>>)=>{
      this.listOfData=response.data;
    });
  }
  setUserList(){
    this.HSService.setUserList(this.userId,this.userName,this.userTypeValue).subscribe((response:ResponseMod<string>)=>{
      // this.result=response.data;
      this.message.info(response.msg);
      this.getUserList();
    });
  }
}

