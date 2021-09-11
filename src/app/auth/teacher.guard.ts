import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class TeacherAuthGuard implements CanActivate{
  constructor(private router: Router, private message: NzMessageService) {

  }
  canActivate(){
    if(sessionStorage.getItem('auth')=='2'){
      return true;
    }else{
      this.router.navigate(['/login']);
      this.message.create("error",'您的用户无权限访问');
      return false;
    }
  }
}
