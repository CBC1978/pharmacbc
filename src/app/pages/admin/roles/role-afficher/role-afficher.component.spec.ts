import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAfficherComponent } from './role-afficher.component';

describe('RoleAfficherComponent', () => {
  let component: RoleAfficherComponent;
  let fixture: ComponentFixture<RoleAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
