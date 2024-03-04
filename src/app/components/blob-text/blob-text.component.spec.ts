import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobTextComponent } from './blob-text.component';

describe('BlobTextComponent', () => {
  let component: BlobTextComponent;
  let fixture: ComponentFixture<BlobTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlobTextComponent]
    });
    fixture = TestBed.createComponent(BlobTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
