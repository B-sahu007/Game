import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharbharComponent } from './charbhar.component';

describe('CharbharComponent', () => {
  let component: CharbharComponent;
  let fixture: ComponentFixture<CharbharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharbharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharbharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
