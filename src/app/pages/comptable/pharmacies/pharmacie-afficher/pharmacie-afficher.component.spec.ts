import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieAfficherComponent } from './pharmacie-afficher.component';

describe('PharmacieAfficherComponent', () => {
  let component: PharmacieAfficherComponent;
  let fixture: ComponentFixture<PharmacieAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacieAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PharmacieAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
