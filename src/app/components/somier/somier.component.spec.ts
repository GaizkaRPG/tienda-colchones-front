import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomierComponent } from './somier.component';

describe('SomierComponent', () => {
  let component: SomierComponent;
  let fixture: ComponentFixture<SomierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
