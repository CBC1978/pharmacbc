import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatRemboursementComponent } from './etat-remboursement.component';

describe('EtatRemboursementComponent', () => {
  let component: EtatRemboursementComponent;
  let fixture: ComponentFixture<EtatRemboursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtatRemboursementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtatRemboursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
