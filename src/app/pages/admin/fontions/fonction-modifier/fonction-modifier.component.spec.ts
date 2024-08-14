import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionModifierComponent } from './fonction-modifier.component';

describe('FonctionModifierComponent', () => {
  let component: FonctionModifierComponent;
  let fixture: ComponentFixture<FonctionModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FonctionModifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FonctionModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
