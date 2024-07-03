import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAfficherComponent } from './medical-afficher.component';

describe('MedicalAfficherComponent', () => {
  let component: MedicalAfficherComponent;
  let fixture: ComponentFixture<MedicalAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
