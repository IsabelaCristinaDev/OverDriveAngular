import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';

import { PecaComponent } from './estoque/peca.component';
import {OrdemServicoComponent} from "./ordemServico/ordemServico.component";
import {CadastroServicoComponent} from "./cadastro-servico/cadastro-servico.component";

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'ordem-servico', component: OrdemServicoComponent },
  { path: 'peca', component: PecaComponent },
  {path: 'servicos', component:CadastroServicoComponent}

];

