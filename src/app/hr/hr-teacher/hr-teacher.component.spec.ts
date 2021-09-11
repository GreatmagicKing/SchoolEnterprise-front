import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTeacherComponent } from './hr-teacher.component';

describe('HrTeacherComponent', () => {
  let component: HrTeacherComponent;
  let fixture: ComponentFixture<HrTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
