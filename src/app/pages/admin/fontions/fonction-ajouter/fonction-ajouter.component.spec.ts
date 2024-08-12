import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionAjouterComponent } from './fonction-ajouter.component';

describe('FonctionAjouterComponent', () => {
  let component: FonctionAjouterComponent;
  let fixture: ComponentFixture<FonctionAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FonctionAjouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FonctionAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
