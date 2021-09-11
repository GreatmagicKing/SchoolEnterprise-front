import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpTestComponent } from './jump-test.component';

describe('JumpTestComponent', () => {
  let component: JumpTestComponent;
  let fixture: ComponentFixture<JumpTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
