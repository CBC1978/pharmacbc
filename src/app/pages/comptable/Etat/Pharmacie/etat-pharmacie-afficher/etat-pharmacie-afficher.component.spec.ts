import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatPharmacieAfficherComponent } from './etat-pharmacie-afficher.component';

describe('EtatPharmacieAfficherComponent', () => {
  let component: EtatPharmacieAfficherComponent;
  let fixture: ComponentFixture<EtatPharmacieAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtatPharmacieAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtatPharmacieAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
