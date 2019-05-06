import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Token10Component } from './token10.component';

describe('Token10Component', () => {
  let component: Token10Component;
  let fixture: ComponentFixture<Token10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Token10Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Token10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
