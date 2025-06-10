import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { OrdemServicoComponent } from './ordemServico/ordemServico.component';

import { EstoqueComponent } from './estoque/estoque.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'ordem-servico', component: OrdemServicoComponent },
  { path: 'Estoque', component: EstoqueComponent },
];

