import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrHeaderComponent } from './hr-header.component';

describe('HrHeaderComponent', () => {
  let component: HrHeaderComponent;
  let fixture: ComponentFixture<HrHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
