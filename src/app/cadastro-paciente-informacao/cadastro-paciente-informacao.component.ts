import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PacienteService } from 'app/services/paciente.service';
import { Paciente } from './../model/paciente.model';

@Component({
  selector: 'app-cadastro-paciente-informacao',
  templateUrl: './cadastro-paciente-informacao.component.html',
  styleUrls: ['./cadastro-paciente-informacao.component.css']
})
export class CadastroPacienteInformacaoComponent implements OnInit {
  constructor(private pacienteService: PacienteService) { }

  public pacientes: Array<Paciente> = [];

  ngOnInit(): void {
    this.pacienteService.getAll().subscribe((pacientesResponse: Paciente[])=>{
      this.pacientes = pacientesResponse;
      console.log(this.pacientes);
    });
  }
}
