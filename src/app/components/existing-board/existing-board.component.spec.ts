import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingBoardComponent } from './existing-board.component';

describe('ExistingBoardComponent', () => {
  let component: ExistingBoardComponent;
  let fixture: ComponentFixture<ExistingBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
