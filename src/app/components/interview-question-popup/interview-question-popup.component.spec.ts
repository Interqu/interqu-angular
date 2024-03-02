import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewQuestionPopupComponent } from './interview-question-popup.component';

describe('InterviewQuestionPopupComponent', () => {
  let component: InterviewQuestionPopupComponent;
  let fixture: ComponentFixture<InterviewQuestionPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewQuestionPopupComponent]
    });
    fixture = TestBed.createComponent(InterviewQuestionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
