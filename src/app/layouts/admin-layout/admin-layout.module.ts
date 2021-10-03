import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { LoginComponent } from '../../login/login.component';
import { CadastroPacienteRevisaoComponent } from '../../cadastro-paciente-revisao/cadastro-paciente-revisao.component';
import { CadastroPacienteStatusComponent } from '../../cadastro-paciente-status/cadastro-paciente-status.component';
import { FinalizarCadastroComponent } from '../../finalizar-cadastro/finalizar-cadastro.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { CadastroPacienteInformacaoComponent } from '../../cadastro-paciente-informacao/cadastro-paciente-informacao.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
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
    LoginComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    FinalizarCadastroComponent,
    CadastroPacienteStatusComponent,
    CadastroPacienteInformacaoComponent,
    CadastroPacienteRevisaoComponent,
  ]
})

export class AdminLayoutModule {}
