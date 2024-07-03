import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAjouterComponent } from './medical-ajouter.component';

describe('MedicalAjouterComponent', () => {
  let component: MedicalAjouterComponent;
  let fixture: ComponentFixture<MedicalAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalAjouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
