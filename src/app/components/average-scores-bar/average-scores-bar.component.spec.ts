import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageScoresBarComponent } from './average-scores-bar.component';

describe('AverageScoresBarComponent', () => {
  let component: AverageScoresBarComponent;
  let fixture: ComponentFixture<AverageScoresBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AverageScoresBarComponent]
    });
    fixture = TestBed.createComponent(AverageScoresBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
