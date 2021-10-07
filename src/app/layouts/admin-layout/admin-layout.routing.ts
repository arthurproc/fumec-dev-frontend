import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { LoginComponent } from '../../login/login.component';
import { CadastroPacienteRevisaoComponent } from '../../cadastro-paciente-revisao/cadastro-paciente-revisao.component';
import { CadastroPacienteStatusComponent } from '../../cadastro-paciente-status/cadastro-paciente-status.component';
import { CadastroPacienteInformacaoComponent } from '../../cadastro-paciente-informacao/cadastro-paciente-informacao.component';
import { FinalizarCadastroComponent } from '../../finalizar-cadastro/finalizar-cadastro.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',                     component: DashboardComponent },
    { path: 'cadastro-paciente-revisao',      component: CadastroPacienteRevisaoComponent},
    { path: 'cadastro-paciente-informacao',  component: CadastroPacienteInformacaoComponent},
    { path: 'cadastro-paciente-status',      component: CadastroPacienteStatusComponent},
    { path: 'user-profile',                  component: UserProfileComponent },
    { path: 'login',                         component: LoginComponent },
    { path: 'finalizar-cadastro',            component: FinalizarCadastroComponent },
    { path: 'table-list',                    component: TableListComponent },
    { path: 'typography',                    component: TypographyComponent },
    { path: 'icons',                         component: IconsComponent },
    { path: 'maps',                          component: MapsComponent },
    { path: 'notifications',                 component: NotificationsComponent },
    { path: 'upgrade',                       component: UpgradeComponent },
];
