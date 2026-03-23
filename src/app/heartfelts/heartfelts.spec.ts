import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heartfelts } from './heartfelts';

describe('Heartfelts', () => {
  let component: Heartfelts;
  let fixture: ComponentFixture<Heartfelts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heartfelts],
    }).compileComponents();

    fixture = TestBed.createComponent(Heartfelts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
