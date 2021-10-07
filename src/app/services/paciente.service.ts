import { Injectable } from "@angular/core";
import { StatusService } from './status.service';

const pacientes = [
  {
    id: 1,
    nome: "Fulano de tal",
    genero: "M",
    dataNasc: "1988-08-16",
    profissionalSaude: false,
    profissionalSeguranca: false,
    contato: "98863-5299",
    bairro: "Centro",
    dataNotificacao: "2020-03-16",
    outrosFatores: "Não tem, ",
    vinculoEpidemiologico: "Não consta",
    fatoresRisco: ["Não tem"],
    internacoes: [],
    testes: [],
    outrosTestes: [],
  },
  {
    id: 1,
    nome: "Fulano de tal",
    genero: "M",
    dataNasc: "1988-08-16",
    profissionalSaude: false,
    profissionalSeguranca: false,
    contato: "98863-5299",
    bairro: "Centro",
    dataNotificacao: "2020-03-16",
    outrosFatores: "Não tem, ",
    vinculoEpidemiologico: "Não consta",
    fatoresRisco: ["Não tem"],
    internacoes: [],
    testes: [],
    outrosTestes: [],
  },
];

interface PacienteWithStatus {
  id: number;
  nome: string;
  genero: string;
  dataNasc: string;
  profissionalSaude: false,
  profissionalSeguranca: false,
  contato: string;
  bairro: string;
  dataNotificacao: string;
  outrosFatores: string;
  vinculoEpidemiologico: string;
  fatoresRisco: Array<string>;
  internacoes: Array<any>,
  testes: Array<any>,
  outrosTestes: Array<any>,
  status: Array<any>,
}

@Injectable({
  providedIn: "root",
})
export class PacienteService {
  constructor(private statusService: StatusService) {}

  Get(id = null) {
    if (id !== null) {
      return pacientes.find(paciente => paciente.id === id);
    }
    return pacientes;
  }

  GetWithStatus(id = null) {
    if (id !== null) {
      const paciente = pacientes.find(paciente => paciente.id === id) as PacienteWithStatus;
      paciente.status = this.statusService.GetByPaciente(paciente.id);
      return paciente;
    }
    const pacientesResponse = Object.assign({}, pacientes) as Array<PacienteWithStatus>;
    for (let i = 0; i < pacientesResponse.length; i++) {
      pacientesResponse[i].status = this.statusService.GetByPaciente(pacientesResponse[i].id);
    }
    return pacientesResponse
  }

}
