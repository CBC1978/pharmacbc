import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalModifierComponent } from './medical-modifier.component';

describe('MedicalModifierComponent', () => {
  let component: MedicalModifierComponent;
  let fixture: ComponentFixture<MedicalModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalModifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
