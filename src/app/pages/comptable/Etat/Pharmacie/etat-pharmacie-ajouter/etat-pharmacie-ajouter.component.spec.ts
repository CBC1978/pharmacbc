import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatPharmacieAjouterComponent } from './etat-pharmacie-ajouter.component';

describe('EtatPharmacieAjouterComponent', () => {
  let component: EtatPharmacieAjouterComponent;
  let fixture: ComponentFixture<EtatPharmacieAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtatPharmacieAjouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtatPharmacieAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
