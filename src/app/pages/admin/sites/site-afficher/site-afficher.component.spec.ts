import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAfficherComponent } from './site-afficher.component';

describe('SiteAfficherComponent', () => {
  let component: SiteAfficherComponent;
  let fixture: ComponentFixture<SiteAfficherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteAfficherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteAfficherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
