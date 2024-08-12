import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceModifierComponent } from './exercice-modifier.component';

describe('ExerciceModifierComponent', () => {
  let component: ExerciceModifierComponent;
  let fixture: ComponentFixture<ExerciceModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceModifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciceModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
