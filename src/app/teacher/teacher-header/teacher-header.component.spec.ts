import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherHeaderComponent } from './teacher-header.component';

describe('TeacherHeaderComponent', () => {
  let component: TeacherHeaderComponent;
  let fixture: ComponentFixture<TeacherHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
