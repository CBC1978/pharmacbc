import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieModifierComponent } from './pharmacie-modifier.component';

describe('PharmacieModifierComponent', () => {
  let component: PharmacieModifierComponent;
  let fixture: ComponentFixture<PharmacieModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacieModifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PharmacieModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
