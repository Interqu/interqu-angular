import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewPracticeComponent } from './interview-practice.component';

describe('InterviewPracticeComponent', () => {
  let component: InterviewPracticeComponent;
  let fixture: ComponentFixture<InterviewPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewPracticeComponent]
    });
    fixture = TestBed.createComponent(InterviewPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
