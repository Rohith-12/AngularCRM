import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyformComponent } from './dummyform.component';

describe('DummyformComponent', () => {
  let component: DummyformComponent;
  let fixture: ComponentFixture<DummyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
