import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-header',
  templateUrl: './teacher-header.component.html',
  styleUrls: ['./teacher-header.component.scss']
})
export class TeacherHeaderComponent implements OnInit {

  constructor(private router:Router) { }



  type: string;
  public routerClick(url: string,t: string){
    this.router.navigate([url]);
    this.type=t;
  }
  public tagClick(){
    if(this.router.url=='/teacher/teacher-courses'){
      this.type = '1';
    }else if(this.router.url=='/teacher/teacher-questions'){
      this.type = '2';
    }else if(this.router.url=='/teacher/teacher-test'){
      this.type = '3';
    }else if(this.router.url=='/teacher/teacher-interview'){
      this.type = '4';
    }
  }
  ngOnInit(): void {
    this.tagClick();
  }

}
