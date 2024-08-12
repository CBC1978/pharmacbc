import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionAfficherComponent } from './permission-afficher.component';

describe('PermissionAfficherComponent', () => {
  let component: PermissionAfficherComponent;
  let fixture: ComponentFixture<PermissionAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermissionAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
