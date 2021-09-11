import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentTestService } from 'src/app/service/student/student-test.service';
import { TestList } from 'src/app/interfaces/student/test-list.interface';
// import { TestContent } from 'src/app/interfaces/student/test-content.interface';
import { ResponseMod } from 'src/app/interfaces/responseMod.interface';

@Component({
  selector: 'app-student-test',
  templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.scss']
})
export class StudentTestComponent implements OnInit {

  constructor(private router: Router, private STService: StudentTestService) { }
  type: string;
  testList: TestList;
  // testContent: TestContent;
  showTest(type: string){
    this.type = type;
  }
  getTestList(){
    this.STService.getStudentTest().subscribe((testList:ResponseMod<TestList>) => {
      this.testList = testList.data;
    });
  }
  jumpTest(testId: number,testType: string,testPart: string){
    this.router.navigate(['/jump-test'], {
      queryParams: {
        testId,testType,testPart
      }
    });
  }
  ngOnInit(): void {
    this.type = '1';
    this.getTestList();
  }

}
