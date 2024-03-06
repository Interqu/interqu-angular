import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCustomInterviewComponent } from './generate-custom-interview.component';

describe('GenerateCustomInterviewComponent', () => {
  let component: GenerateCustomInterviewComponent;
  let fixture: ComponentFixture<GenerateCustomInterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateCustomInterviewComponent]
    });
    fixture = TestBed.createComponent(GenerateCustomInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
