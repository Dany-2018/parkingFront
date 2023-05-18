import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPagarComponent } from './total-pagar.component';

describe('TotalPagarComponent', () => {
  let component: TotalPagarComponent;
  let fixture: ComponentFixture<TotalPagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPagarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
