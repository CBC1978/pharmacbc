import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionAfficherComponent } from './fonction-afficher.component';

describe('FonctionAfficherComponent', () => {
  let component: FonctionAfficherComponent;
  let fixture: ComponentFixture<FonctionAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FonctionAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FonctionAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
