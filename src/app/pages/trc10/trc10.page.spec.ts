import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trc10Page } from './trc10.page';

describe('Trc10Page', () => {
  let component: Trc10Page;
  let fixture: ComponentFixture<Trc10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trc10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trc10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
