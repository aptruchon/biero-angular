import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationBiereComponent } from './modification-biere.component';

describe('ModificationBiereComponent', () => {
  let component: ModificationBiereComponent;
  let fixture: ComponentFixture<ModificationBiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationBiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
