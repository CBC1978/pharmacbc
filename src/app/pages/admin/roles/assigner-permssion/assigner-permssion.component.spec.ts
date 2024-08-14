import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignerPermssionComponent } from './assigner-permssion.component';

describe('AssignerPermssionComponent', () => {
  let component: AssignerPermssionComponent;
  let fixture: ComponentFixture<AssignerPermssionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignerPermssionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignerPermssionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
