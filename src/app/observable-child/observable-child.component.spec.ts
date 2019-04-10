import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableChildComponent } from './observable-child.component';

describe('ObservableChildComponent', () => {
  let component: ObservableChildComponent;
  let fixture: ComponentFixture<ObservableChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
