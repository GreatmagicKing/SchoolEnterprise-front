import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrPersonnelComponent } from './hr-personnel.component';

describe('HrPersonnelComponent', () => {
  let component: HrPersonnelComponent;
  let fixture: ComponentFixture<HrPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
