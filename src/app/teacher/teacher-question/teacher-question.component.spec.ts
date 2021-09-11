import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherQuestionComponent } from './teacher-question.component';

describe('TeacherQuestionComponent', () => {
  let component: TeacherQuestionComponent;
  let fixture: ComponentFixture<TeacherQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
