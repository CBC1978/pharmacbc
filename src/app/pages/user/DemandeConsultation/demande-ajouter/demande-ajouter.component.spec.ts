import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAjouterComponent } from './demande-ajouter.component';

describe('DemandeAjouterComponent', () => {
  let component: DemandeAjouterComponent;
  let fixture: ComponentFixture<DemandeAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeAjouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
