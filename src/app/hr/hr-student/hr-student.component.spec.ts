import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrStudentComponent } from './hr-student.component';

describe('HrStudentComponent', () => {
  let component: HrStudentComponent;
  let fixture: ComponentFixture<HrStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
