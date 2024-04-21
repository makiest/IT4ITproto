import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkingPageComponent } from './networking-page.component';

describe('NetworkingPageComponent', () => {
  let component: NetworkingPageComponent;
  let fixture: ComponentFixture<NetworkingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetworkingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
