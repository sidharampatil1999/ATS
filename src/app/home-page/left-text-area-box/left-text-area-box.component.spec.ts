import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTextAreaBoxComponent } from './left-text-area-box.component';

describe('LeftTextAreaBoxComponent', () => {
  let component: LeftTextAreaBoxComponent;
  let fixture: ComponentFixture<LeftTextAreaBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftTextAreaBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftTextAreaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
