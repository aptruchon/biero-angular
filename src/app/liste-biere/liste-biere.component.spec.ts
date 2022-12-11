import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBiereComponent } from './liste-biere.component';

describe('ListeBiereComponent', () => {
  let component: ListeBiereComponent;
  let fixture: ComponentFixture<ListeBiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
