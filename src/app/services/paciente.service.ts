import { Injectable } from "@angular/core";
import { StatusService } from './status.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './../model/paciente.model';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class PacienteService {
  constructor(
    private statusService: StatusService,
    private http: HttpClient
  ) {}

  public getAll(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>('http://localhost:3000/pacientes');
  }

  public getWithStatus(pacienteId): Observable<Paciente> {
    return this.http.get<Paciente>(`http://localhost:3000/pacientes/${pacienteId}`).pipe(
      mergeMap(
        paciente => this.statusService.getByPaciente(paciente.id),
        (paciente, status) => ({ ...paciente, status: status})
      )
    );
  }

  public get(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`http://localhost:3000/pacientes/${id}`);
  }

  public create(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>('http://localhost:3000/pacientes', paciente);
  }
}
