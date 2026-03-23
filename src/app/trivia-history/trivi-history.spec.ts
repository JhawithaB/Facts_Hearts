import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviHistory } from './trivi-history';

describe('TriviHistory', () => {
  let component: TriviHistory;
  let fixture: ComponentFixture<TriviHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriviHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(TriviHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
