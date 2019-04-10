import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableParentComponent } from './observable-parent.component';

describe('ObservableParentComponent', () => {
  let component: ObservableParentComponent;
  let fixture: ComponentFixture<ObservableParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
