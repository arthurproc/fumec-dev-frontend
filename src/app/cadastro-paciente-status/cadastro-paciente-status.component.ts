import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Status } from 'app/model/status.model';
import { StatusService } from 'app/services/status.service';

@Component({
  selector: 'app-cadastro-paciente-status',
  templateUrl: './cadastro-paciente-status.component.html',
  styleUrls: ['./cadastro-paciente-status.component.css']
})
export class CadastroPacienteStatusComponent implements OnInit {

  formModelStatusInfo = {
    data: new FormControl("", [Validators.required]),
    situacao: new FormControl("", [Validators.required]),
    observacao: new FormControl("", [Validators.required]),
    assintomatico: new FormControl("", [Validators.required]),
    sintomas: new FormControl("", [Validators.required]),
    internacao: new FormControl("", [Validators.required]),
    dataInicio: new FormControl("", [Validators.required]),
    outrosSintomas: new FormControl("", [Validators.required]),
  };

  pacienteId = '';

  constructor(
    private statusService: StatusService
  ) { }

  isInserted = false;

  ngOnInit() {
  }

  handleStatus(): void {
    const novoStatus = new Status(
      null,
      this.pacienteId,
      this.formModelStatusInfo.sintomas.value,
      this.formModelStatusInfo.data.value,
      this.formModelStatusInfo.dataInicio.value,
      this.formModelStatusInfo.situacao.value,
      this.formModelStatusInfo.observacao.value,
      this.formModelStatusInfo.assintomatico.value,
      this.formModelStatusInfo.internacao.value,
      this.formModelStatusInfo.outrosSintomas.value,
      null,
    );

    this.statusService.create(novoStatus).subscribe((result => {
      if (result) {
        this.isInserted = true;
      }
    }));
  }
}
