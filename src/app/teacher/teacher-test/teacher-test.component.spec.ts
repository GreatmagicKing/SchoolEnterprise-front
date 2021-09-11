import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTestComponent } from './teacher-test.component';

describe('TeacherTestComponent', () => {
  let component: TeacherTestComponent;
  let fixture: ComponentFixture<TeacherTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
