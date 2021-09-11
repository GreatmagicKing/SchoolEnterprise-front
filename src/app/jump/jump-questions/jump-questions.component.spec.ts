import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpQuestionsComponent } from './jump-questions.component';

describe('JumpQuestionsComponent', () => {
  let component: JumpQuestionsComponent;
  let fixture: ComponentFixture<JumpQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
