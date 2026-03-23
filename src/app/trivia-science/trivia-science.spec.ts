import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaScience } from './trivia-science';

describe('TriviaScience', () => {
  let component: TriviaScience;
  let fixture: ComponentFixture<TriviaScience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriviaScience],
    }).compileComponents();

    fixture = TestBed.createComponent(TriviaScience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
