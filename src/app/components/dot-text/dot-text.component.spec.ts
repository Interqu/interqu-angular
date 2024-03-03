import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotTextComponent } from './dot-text.component';

describe('DotTextComponent', () => {
  let component: DotTextComponent;
  let fixture: ComponentFixture<DotTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotTextComponent]
    });
    fixture = TestBed.createComponent(DotTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
