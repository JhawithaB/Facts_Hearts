import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaGeneralknowledge } from './trivia-generalknowledge';

describe('TriviaGeneralknowledge', () => {
  let component: TriviaGeneralknowledge;
  let fixture: ComponentFixture<TriviaGeneralknowledge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriviaGeneralknowledge],
    }).compileComponents();

    fixture = TestBed.createComponent(TriviaGeneralknowledge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
