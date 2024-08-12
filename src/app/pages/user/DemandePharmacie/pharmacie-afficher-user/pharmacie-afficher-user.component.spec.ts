import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieAfficherUserComponent } from './pharmacie-afficher-user.component';

describe('PharmacieAfficherUserComponent', () => {
  let component: PharmacieAfficherUserComponent;
  let fixture: ComponentFixture<PharmacieAfficherUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacieAfficherUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PharmacieAfficherUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
