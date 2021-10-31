import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './../model/paciente.model';
import { Status } from './../model/status.model';


@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(
    private http: HttpClient
  ) {}

  public getAll(): Observable<Status[]> {
    return this.http.get<Status[]>('http://localhost:3000/status');
  }

  public get(id: number): Observable<Status[]> {
    return this.http.get<Status[]>(`http://localhost:3000/status/${id}`);
  }

  public create(status: Status): Observable<Status> {
    return this.http.post<Status>('http://localhost:3000/status', status);
  }
}
