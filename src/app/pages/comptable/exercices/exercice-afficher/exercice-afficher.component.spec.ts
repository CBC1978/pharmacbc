import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceAfficherComponent } from './exercice-afficher.component';

describe('ExerciceAfficherComponent', () => {
  let component: ExerciceAfficherComponent;
  let fixture: ComponentFixture<ExerciceAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciceAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
