import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExpenceComponent } from './manage-expence.component';

describe('ManageExpenceComponent', () => {
  let component: ManageExpenceComponent;
  let fixture: ComponentFixture<ManageExpenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageExpenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExpenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
