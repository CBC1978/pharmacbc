import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAfficherComponent } from './demande-afficher.component';

describe('DemandeAfficherComponent', () => {
  let component: DemandeAfficherComponent;
  let fixture: ComponentFixture<DemandeAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
