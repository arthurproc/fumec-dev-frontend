import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPacienteStatusComponent } from './cadastro-paciente-status.component';

describe('CadastroPacienteStatusComponent', () => {
  let component: CadastroPacienteStatusComponent;
  let fixture: ComponentFixture<CadastroPacienteStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPacienteStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPacienteStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
