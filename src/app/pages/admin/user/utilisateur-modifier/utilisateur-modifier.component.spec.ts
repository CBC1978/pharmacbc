import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurModifierComponent } from './utilisateur-modifier.component';

describe('UtilisateurModifierComponent', () => {
  let component: UtilisateurModifierComponent;
  let fixture: ComponentFixture<UtilisateurModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisateurModifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtilisateurModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
