import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPacienteInformacaoComponent } from './cadastro-paciente-informacao.component';

describe('TableListComponent', () => {
  let component: CadastroPacienteInformacaoComponent;
  let fixture: ComponentFixture<CadastroPacienteInformacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPacienteInformacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPacienteInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
