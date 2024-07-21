import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATSInfoComponent } from './atsinfo.component';

describe('ATSInfoComponent', () => {
  let component: ATSInfoComponent;
  let fixture: ComponentFixture<ATSInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ATSInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ATSInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
