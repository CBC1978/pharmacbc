import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteModifierComponent } from './site-modifier.component';

describe('SiteModifierComponent', () => {
  let component: SiteModifierComponent;
  let fixture: ComponentFixture<SiteModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteModifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
