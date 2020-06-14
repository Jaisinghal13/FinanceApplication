import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenceSummaryComponent } from './expence-summary.component';

describe('ExpenceSummaryComponent', () => {
  let component: ExpenceSummaryComponent;
  let fixture: ComponentFixture<ExpenceSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenceSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
