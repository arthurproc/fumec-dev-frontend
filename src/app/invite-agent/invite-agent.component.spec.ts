import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteAgentComponent } from './invite-agent.component';

describe('InviteAgentComponent', () => {
  let component: InviteAgentComponent;
  let fixture: ComponentFixture<InviteAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
