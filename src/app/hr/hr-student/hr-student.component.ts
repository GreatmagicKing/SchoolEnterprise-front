import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StudentRate } from 'src/app/interfaces/hr/student-rate.interface';
import { HrStudentService } from 'src/app/service/hr/hr-student.service';
import { ResponseMod } from 'src/app/interfaces/responseMod.interface';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Recruit } from 'src/app/interfaces/hr/recruit.interface';
import { HrInterviewService } from 'src/app/service/hr/hr-interview.service';
import { InterviewR } from 'src/app/interfaces/hr/interviewR.interface';
import { Score } from 'src/app/interfaces/student/score.interface';
import { AcceptanceRate } from 'src/app/interfaces/AcceptanceRate';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-hr-student',
  templateUrl: './hr-student.component.html',
  styleUrls: ['./hr-student.component.scss']
})
export class HrStudentComponent implements OnInit, AfterViewInit {

  constructor(private HSService: HrStudentService,
    private router: Router, private message: NzMessageService,
    private HIService: HrInterviewService) { }


  studentRate: StudentRate;
  type: string;
  interviewR: InterviewR;
  averageScore: Array<Score>;
  acceptanceRate: Array<AcceptanceRate>;

  showTable(type: string) {
    this.type = type;

    // this.message.create('error', `用户ID或图书ID错误`);
  }
  showStudentDetails(userId: string) {
    this.router.navigate(['/jump-studentdetails'], {
      queryParams: {
        userId
      }
    });
  }

  getStudentRate() {
    this.HSService.getStudentRate().subscribe((response: ResponseMod<StudentRate>) => {
      this.studentRate = response.data;
    });
  }
  getInterviewR() {
    this.HIService.getInterviewR().subscribe((response: ResponseMod<InterviewR>) => {
      this.interviewR = response.data;
    });
  }
  ngOnInit(): void {
    this.getStudentRate();
    this.getInterviewR();
    this.getAverageScore();
    this.getAcceptanceRate();
  }

  ngAfterViewInit(): void {
    // const myDemo = echarts.init(document.getElementById("ech") as HTMLDivElement);
    // myDemo.setOption(this.option);
  }

  getAverageScore() {
    this.HSService.getAverageScore().subscribe((response: ResponseMod<Array<Score>>) => {
      this.averageScore = response.data;
      const averageScoreHomeLegend = ['HTML/CSS', 'JavaScript', 'Java/Spring', 'TypeScript', 'Angular', 'MyBatis', 'SQL', 'Junit'];
      const averageScoreHomeXdata = ['第一次成绩', '第二次成绩', '第三次成绩', '大作业'];
      const averageScoreHome = echarts.init(document.getElementById("averageScoreHome") as HTMLDivElement);
      averageScoreHome.setOption(this.setLineChart('作业平均分数', averageScoreHomeLegend, averageScoreHomeXdata, this.averageScore, 'Home'));
      const averageScoreTest = echarts.init(document.getElementById("averageScoreTest") as HTMLDivElement);
      averageScoreTest.setOption(this.setLineChart('测试平均分数', averageScoreHomeLegend, averageScoreHomeXdata, this.averageScore, 'Test'));

    });
  }
  getAcceptanceRate() {
    this.HSService.getAcceptanceRate().subscribe((response: ResponseMod<Array<AcceptanceRate>>) => {
      this.acceptanceRate = response.data;
      console.log(this.acceptanceRate);
      const acceptanceRate = echarts.init(document.getElementById("acceptanceRate") as HTMLDivElement);
      acceptanceRate.setOption(this.setPie(this.acceptanceRate));
    });
  }

  setLineChart(title: String, legend: Array<String>, xdata: Array<String>, lineChartData, type: string) {
    const option = {
      title: {
        text: title
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: legend
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xdata
      },
      yAxis: {
        type: 'value'
      },
      series: this.setLineChartData(lineChartData, type)
    };
    return option;
  }
  setLineChartData(lineChartData: Array<Score>, type) {
    let dataArray = [];
    lineChartData.forEach(function (value) {
      let data
      if (type == 'Home') {
        data = {
          name: value.coursesName,
          type: 'line',
          data: [value.homeWorkOne, value.homeWorkTwo, value.homeWorkThree, value.homeWorkBig],
          smooth: true
        }
      }
      if (type == 'Test') {
        data = {
          name: value.coursesName,
          type: 'line',
          data: [value.testOne, value.testTwo, value.testThree, value.testBig],
          smooth: true
        }
      }
      dataArray.push(data)
    })
    return dataArray;
  }
  setPie(pieData) {
    const option = {
      title: {
        text: '录取比例',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '人数',
          type: 'pie',
          radius: '50%',
          data: this.setPieData(pieData)
        }
      ]
    };
    return option
  }
  setPieData(pieData: Array<AcceptanceRate>) {
    let dataArray = [];
    pieData.forEach(function (value) {
      if(value.employ=='1'){
        value.employ='录取'
      } else if(value.employ=='2'){
        value.employ='未录取'
      }else{
        value.employ='未处理'
      }
      const data={
        name: value.employ,
        value: value.num
      }
      dataArray.push(data);
    })
    return dataArray;
  }
}
