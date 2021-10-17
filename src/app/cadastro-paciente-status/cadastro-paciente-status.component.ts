import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { MatCheckboxModule } from '@angular/material/checkbox';

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
  }

  constructor() { }

  ngOnInit() {
  }

  handleStatus(): void {
    console.log(this.formModelStatusInfo.data.value);
    console.log(this.formModelStatusInfo.situacao.value);
    console.log(this.formModelStatusInfo.observacao.value);
    console.log(this.formModelStatusInfo.assintomatico.value);
    console.log(this.formModelStatusInfo.sintomas.value);
    console.log(this.formModelStatusInfo.internacao.value);
    console.log(this.formModelStatusInfo.dataInicio.value);
    console.log(this.formModelStatusInfo.outrosSintomas.value);
  }


}
