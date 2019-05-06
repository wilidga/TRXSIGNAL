import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tokens10Component } from './tokens10.component';

describe('Tokens10Component', () => {
  let component: Tokens10Component;
  let fixture: ComponentFixture<Tokens10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tokens10Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tokens10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
