import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CadastroPacienteRevisaoComponent } from '../../cadastro-paciente-revisao/cadastro-paciente-revisao.component';
import { CadastroPacienteStatusComponent } from '../../cadastro-paciente-status/cadastro-paciente-status.component';
import { CadastroPacienteInformacaoComponent } from '../../cadastro-paciente-informacao/cadastro-paciente-informacao.component';
import { FinalizarCadastroComponent } from '../../finalizar-cadastro/finalizar-cadastro.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { AuthGuardService } from 'app/services/auth-guard.service';
import { InviteAgentComponent } from 'app/invite-agent/invite-agent.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',                     component: DashboardComponent },
    { path: 'cadastro-paciente-revisao',     component: CadastroPacienteRevisaoComponent, canActivate: [AuthGuardService] },
    { path: 'cadastro-paciente-informacao',  component: CadastroPacienteInformacaoComponent, canActivate: [AuthGuardService] },
    { path: 'cadastro-paciente-status',      component: CadastroPacienteStatusComponent, canActivate: [AuthGuardService] },
    { path: 'user-profile',                  component: UserProfileComponent, canActivate: [AuthGuardService] },
    { path: 'finalizar-cadastro',            component: FinalizarCadastroComponent, canActivate: [AuthGuardService] },
    { path: 'convidar-agente',               component: InviteAgentComponent, canActivate: [AuthGuardService] }
];
