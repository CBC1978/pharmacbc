import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAjouterComponent } from './site-ajouter.component';

describe('SiteAjouterComponent', () => {
  let component: SiteAjouterComponent;
  let fixture: ComponentFixture<SiteAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteAjouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
