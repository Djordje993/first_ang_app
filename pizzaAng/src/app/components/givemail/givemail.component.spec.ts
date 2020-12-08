import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivemailComponent } from './givemail.component';

describe('GivemailComponent', () => {
  let component: GivemailComponent;
  let fixture: ComponentFixture<GivemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GivemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
