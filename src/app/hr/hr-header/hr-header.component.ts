import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-header',
  templateUrl: './hr-header.component.html',
  styleUrls: ['./hr-header.component.scss']
})
export class HrHeaderComponent implements OnInit {

  constructor(private router:Router) { }


  role=sessionStorage.getItem('auth')
  type: string;
  public routerClick(url: string,t: string){
    this.router.navigate([url]);
    this.type=t;
  }

  public tagClick(){
    if(this.router.url=='/hr/hr-student'){
      this.type = '1';
    }else if(this.router.url=='/hr/hr-teacher'){
      this.type = '2';
    }else if(this.router.url=='/hr/hr-interview'){
      this.type = '3';
    }else if(this.router.url=='/hr/hr-personnel'){
      this.type = '4';
    }
  }
  ngOnInit(): void {
    this.tagClick();
  }

}
