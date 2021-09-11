import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { ResponseData } from '../interfaces/response.interface';
import { Router } from '@angular/router';
import { ResponseMod } from '../interfaces/responseMod.interface';
import { ResponseToken } from '../interfaces/responseToken';
import { user } from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userId: string;
  passWord: string;
  validateForm!: FormGroup;

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  userLogin(userId: string, passWord: string) {
    this.ul.login(userId, passWord).subscribe((response: ResponseToken) => {

      console.log(response);
      if (response.state=="0") {
        // const authority = response.data[0].authority;
        const authority = response.data;
        if (authority == "1") {
          this.router.navigateByUrl("/student");
          sessionStorage.setItem('auth','1');
        } else if (authority == "2") {
          this.router.navigateByUrl("/teacher");
          sessionStorage.setItem('auth','2');
        }else if (authority == "3") {
          this.router.navigateByUrl("/hr");
          sessionStorage.setItem('auth','3');
        }else if (authority == "4") {
          this.router.navigateByUrl("/hr");
          sessionStorage.setItem('auth','4');
        }
        sessionStorage.setItem('token',response.token);
      } else {
        alert(response.msg);
      }

    });
  }
  user(userId: string, passWord: string){
    this.ul.user(userId, passWord).subscribe((response: any) => {
      console.log(response+"111111111");

    });
  }
  constructor(private fb: FormBuilder, private ul: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

}
