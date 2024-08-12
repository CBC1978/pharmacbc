import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurAfficherComponent } from './utilisateur-afficher.component';

describe('UtilisateurAfficherComponent', () => {
  let component: UtilisateurAfficherComponent;
  let fixture: ComponentFixture<UtilisateurAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisateurAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtilisateurAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
