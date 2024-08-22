import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatPharmacieRembComponent } from './etat-pharmacie-remb.component';

describe('EtatPharmacieRembComponent', () => {
  let component: EtatPharmacieRembComponent;
  let fixture: ComponentFixture<EtatPharmacieRembComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtatPharmacieRembComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtatPharmacieRembComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
