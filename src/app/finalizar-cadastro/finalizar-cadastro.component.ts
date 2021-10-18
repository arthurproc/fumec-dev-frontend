import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Paciente } from 'app/model/paciente.model';
import { PacienteService } from 'app/services/paciente.service';

@Component({
  selector: 'app-finalizar-cadastro',
  templateUrl: './finalizar-cadastro.component.html',
  styleUrls: ['./finalizar-cadastro.component.css']
})
export class FinalizarCadastroComponent implements OnInit {

  formModelRegisterInfo = {
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]), 
  }

  constructor(private pacieteService: PacienteService) { }

  ngOnInit() {
  }

  handleSaveRegister() {
    console.log(this.formModelRegisterInfo.password.value)
    console.log(this.formModelRegisterInfo.confirmPassword.value)
  }

}
