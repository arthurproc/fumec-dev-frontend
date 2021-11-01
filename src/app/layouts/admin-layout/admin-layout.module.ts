import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { CadastroPacienteRevisaoComponent } from '../../cadastro-paciente-revisao/cadastro-paciente-revisao.component';
import { CadastroPacienteStatusComponent } from '../../cadastro-paciente-status/cadastro-paciente-status.component';
import { FinalizarCadastroComponent } from '../../finalizar-cadastro/finalizar-cadastro.component';
import { InviteAgentComponent } from '../../invite-agent/invite-agent.component';
import { CadastroPacienteInformacaoComponent } from '../../cadastro-paciente-informacao/cadastro-paciente-informacao.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    InviteAgentComponent,
    FinalizarCadastroComponent,
    CadastroPacienteStatusComponent,
    CadastroPacienteInformacaoComponent,
    CadastroPacienteRevisaoComponent,
  ]
})

export class AdminLayoutModule {}
