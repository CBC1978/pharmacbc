import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemboursementPharmacieAfficherComponent } from './remboursement-pharmacie-afficher.component';

describe('RemboursementPharmacieAfficherComponent', () => {
  let component: RemboursementPharmacieAfficherComponent;
  let fixture: ComponentFixture<RemboursementPharmacieAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemboursementPharmacieAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemboursementPharmacieAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
