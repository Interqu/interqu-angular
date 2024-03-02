import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCardDetailedComponent } from './interview-card-detailed.component';

describe('InterviewCardDetailedComponent', () => {
  let component: InterviewCardDetailedComponent;
  let fixture: ComponentFixture<InterviewCardDetailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewCardDetailedComponent]
    });
    fixture = TestBed.createComponent(InterviewCardDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
