import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceAjouterComponent } from './exercice-ajouter.component';

describe('ExerciceAjouterComponent', () => {
  let component: ExerciceAjouterComponent;
  let fixture: ComponentFixture<ExerciceAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceAjouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciceAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
