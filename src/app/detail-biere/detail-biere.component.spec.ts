import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBiereComponent } from './detail-biere.component';

describe('DetailBiereComponent', () => {
  let component: DetailBiereComponent;
  let fixture: ComponentFixture<DetailBiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
