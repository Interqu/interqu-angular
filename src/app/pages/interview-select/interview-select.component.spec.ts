import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewSelectComponent } from './interview-select.component';

describe('InterviewSelectComponent', () => {
  let component: InterviewSelectComponent;
  let fixture: ComponentFixture<InterviewSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewSelectComponent]
    });
    fixture = TestBed.createComponent(InterviewSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
