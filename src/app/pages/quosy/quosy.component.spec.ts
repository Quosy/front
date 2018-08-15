import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuosyComponent } from './quosy.component';

describe('QuosyComponent', () => {
  let component: QuosyComponent;
  let fixture: ComponentFixture<QuosyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuosyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuosyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
