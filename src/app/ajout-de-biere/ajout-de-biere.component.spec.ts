import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDeBiereComponent } from './ajout-de-biere.component';

describe('AjoutDeBiereComponent', () => {
  let component: AjoutDeBiereComponent;
  let fixture: ComponentFixture<AjoutDeBiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDeBiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutDeBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
