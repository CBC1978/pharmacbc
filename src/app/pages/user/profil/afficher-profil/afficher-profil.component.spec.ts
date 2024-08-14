import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherProfilComponent } from './afficher-profil.component';

describe('AfficherProfilComponent', () => {
  let component: AfficherProfilComponent;
  let fixture: ComponentFixture<AfficherProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfficherProfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfficherProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
