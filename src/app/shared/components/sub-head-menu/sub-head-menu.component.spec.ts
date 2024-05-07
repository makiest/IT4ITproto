import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeadMenuComponent } from './sub-head-menu.component';

describe('SubHeadMenuComponent', () => {
  let component: SubHeadMenuComponent;
  let fixture: ComponentFixture<SubHeadMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubHeadMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubHeadMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
