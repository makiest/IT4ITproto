import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputingPageComponent } from './computing-page.component';

describe('ComputingPageComponent', () => {
  let component: ComputingPageComponent;
  let fixture: ComponentFixture<ComputingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
