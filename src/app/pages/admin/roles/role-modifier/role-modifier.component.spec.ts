import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleModifierComponent } from './role-modifier.component';

describe('RoleModifierComponent', () => {
  let component: RoleModifierComponent;
  let fixture: ComponentFixture<RoleModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleModifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
