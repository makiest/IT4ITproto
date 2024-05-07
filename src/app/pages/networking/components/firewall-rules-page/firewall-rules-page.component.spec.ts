import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirewallRulesPageComponent } from './firewall-rules-page.component';

describe('FirewallRulesPageComponent', () => {
  let component: FirewallRulesPageComponent;
  let fixture: ComponentFixture<FirewallRulesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirewallRulesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirewallRulesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
