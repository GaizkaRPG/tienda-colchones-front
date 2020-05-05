import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColchonComponent } from './colchon.component';

describe('ColchonComponent', () => {
  let component: ColchonComponent;
  let fixture: ComponentFixture<ColchonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColchonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColchonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
