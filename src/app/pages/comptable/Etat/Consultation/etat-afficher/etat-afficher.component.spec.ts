import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatAfficherComponent } from './etat-afficher.component';

describe('EtatAfficherComponent', () => {
  let component: EtatAfficherComponent;
  let fixture: ComponentFixture<EtatAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtatAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtatAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
