import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalVentaComponent } from './total-venta.component';

describe('TotalVentaComponent', () => {
  let component: TotalVentaComponent;
  let fixture: ComponentFixture<TotalVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
