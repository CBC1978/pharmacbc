import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieAjouterComponent } from './pharmacie-ajouter.component';

describe('PharmacieAjouterComponent', () => {
  let component: PharmacieAjouterComponent;
  let fixture: ComponentFixture<PharmacieAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacieAjouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PharmacieAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
