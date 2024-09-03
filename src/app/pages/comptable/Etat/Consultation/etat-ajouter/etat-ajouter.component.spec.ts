import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatAjouterComponent } from './etat-ajouter.component';

describe('EtatAjouterComponent', () => {
  let component: EtatAjouterComponent;
  let fixture: ComponentFixture<EtatAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtatAjouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtatAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
