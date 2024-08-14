import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueAfficherComponent } from './historique-afficher.component';

describe('HistoriqueAfficherComponent', () => {
  let component: HistoriqueAfficherComponent;
  let fixture: ComponentFixture<HistoriqueAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriqueAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
