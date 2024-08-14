import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemboursementConsultationAfficherComponent } from './remboursement-consultation-afficher.component';

describe('RemboursementConsultationAfficherComponent', () => {
  let component: RemboursementConsultationAfficherComponent;
  let fixture: ComponentFixture<RemboursementConsultationAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemboursementConsultationAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemboursementConsultationAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
