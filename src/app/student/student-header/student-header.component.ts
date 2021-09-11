import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.scss']
})
export class StudentHeaderComponent implements OnInit {

  constructor(private router:Router) { }



  type: string;
  public routerClick(url: string,t: string){
    this.router.navigate([url]);
    this.type=t;
  }
  public tagClick(){
    if(this.router.url=='/student/student-courses'){
      this.type = '1';
    }else if(this.router.url=='/student/student-questions'){
      this.type = '2';
    }else if(this.router.url=='/student/student-test'){
      this.type = '3';
    }else if(this.router.url=='/student/student-interview'){
      this.type = '4';
    }
  }
  ngOnInit(): void {
    this.tagClick();
  }
}
