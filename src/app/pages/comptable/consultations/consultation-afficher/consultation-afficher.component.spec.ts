import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationAfficherComponent } from './consultation-afficher.component';

describe('ConsultationAfficherComponent', () => {
  let component: ConsultationAfficherComponent;
  let fixture: ComponentFixture<ConsultationAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultationAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultationAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
