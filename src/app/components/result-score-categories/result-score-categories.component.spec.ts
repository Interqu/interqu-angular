import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultScoreCategoriesComponent } from './result-score-categories.component';

describe('ResultScoreCategoriesComponent', () => {
  let component: ResultScoreCategoriesComponent;
  let fixture: ComponentFixture<ResultScoreCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultScoreCategoriesComponent]
    });
    fixture = TestBed.createComponent(ResultScoreCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
