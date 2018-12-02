import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTravelPage } from './new-travel.page';

describe('NewTravelPage', () => {
  let component: NewTravelPage;
  let fixture: ComponentFixture<NewTravelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTravelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
