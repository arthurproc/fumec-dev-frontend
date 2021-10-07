import { Injectable } from '@angular/core';

const status = [
  {
    id: 1,
    paciente: 2,
    sintomas: [],
    dataStatus: "2020-03-16T03:00:00.000Z",
    inicioSintomas: "2020-03-14T03:00:00.000Z",
    previsaoColeta: "2020-03-21T03:00:00.000Z",
    outrosSintomas: ", Sim",
    situacao: "BAIXA PROBABILIDADE",
    assintomatico: false,
    createdAt: "2020-08-13T04:55:59.530Z",
    updatedAt: "2020-08-13T04:55:59.530Z",
  },
  {
    id: 2,
    paciente: 1,
    sintomas: [],
    dataStatus: "2020-03-16T03:00:00.000Z",
    inicioSintomas: "2020-03-14T03:00:00.000Z",
    previsaoColeta: "2020-03-21T03:00:00.000Z",
    outrosSintomas: ", Sim",
    situacao: "BAIXA PROBABILIDADE",
    assintomatico: false,
    createdAt: "2020-08-13T04:55:59.530Z",
    updatedAt: "2020-08-13T04:55:59.530Z",
  },
]
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor() { }

  Get(id = null) {
    if (id !== null) {
      return status.find(stat => stat.id === id);
    }
    return status;
  }

  GetByPaciente(pacienteId: number) {
    return status.filter(stat => stat.paciente === pacienteId);
  }
}
