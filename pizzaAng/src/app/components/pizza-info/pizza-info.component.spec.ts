import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaInfoComponent } from './pizza-info.component';

describe('PizzaInfoComponent', () => {
  let component: PizzaInfoComponent;
  let fixture: ComponentFixture<PizzaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
