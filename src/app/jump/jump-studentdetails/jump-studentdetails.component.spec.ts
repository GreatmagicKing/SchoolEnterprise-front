import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpStudentdetailsComponent } from './jump-studentdetails.component';

describe('JumpStudentdetailsComponent', () => {
  let component: JumpStudentdetailsComponent;
  let fixture: ComponentFixture<JumpStudentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpStudentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpStudentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
