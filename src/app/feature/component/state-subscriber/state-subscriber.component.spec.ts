import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSubscriberComponent } from './state-subscriber.component';

describe('StateSubscriberComponent', () => {
  let component: StateSubscriberComponent;
  let fixture: ComponentFixture<StateSubscriberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateSubscriberComponent]
    });
    fixture = TestBed.createComponent(StateSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
