import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class HrAuthGuard implements CanActivate{
  constructor(private router: Router, private message: NzMessageService) {

  }
  canActivate(){
    if(sessionStorage.getItem('auth')=='3' || sessionStorage.getItem('auth')=='4'){
      return true;
    }else{

      this.router.navigate(['/login']);
      this.message.create("error",'您的用户无权限访问');
      return false;
    }
  }
}
