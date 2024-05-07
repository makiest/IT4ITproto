import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirewallObjectsPageComponent } from './firewall-objects-page.component';

describe('FirewallObjectsPageComponent', () => {
  let component: FirewallObjectsPageComponent;
  let fixture: ComponentFixture<FirewallObjectsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirewallObjectsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirewallObjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
