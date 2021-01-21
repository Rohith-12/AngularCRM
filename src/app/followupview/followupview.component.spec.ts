import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowupviewComponent } from './followupview.component';

describe('FollowupviewComponent', () => {
  let component: FollowupviewComponent;
  let fixture: ComponentFixture<FollowupviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowupviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowupviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
