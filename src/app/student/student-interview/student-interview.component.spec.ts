import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInterviewComponent } from './student-interview.component';

describe('StudentInterviewComponent', () => {
  let component: StudentInterviewComponent;
  let fixture: ComponentFixture<StudentInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
