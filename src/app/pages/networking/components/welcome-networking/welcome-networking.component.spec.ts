import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeNetworkingComponent } from './welcome-networking.component';

describe('WelcomeNetworkingComponent', () => {
  let component: WelcomeNetworkingComponent;
  let fixture: ComponentFixture<WelcomeNetworkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeNetworkingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeNetworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
