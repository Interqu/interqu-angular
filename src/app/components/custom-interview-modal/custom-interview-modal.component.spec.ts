import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInterviewModalComponent } from './custom-interview-modal.component';

describe('CustomInterviewModalComponent', () => {
  let component: CustomInterviewModalComponent;
  let fixture: ComponentFixture<CustomInterviewModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomInterviewModalComponent]
    });
    fixture = TestBed.createComponent(CustomInterviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
