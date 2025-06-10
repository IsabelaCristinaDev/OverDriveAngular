import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss',
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: '/dashboard',
    },
    {
      label: 'Cliente',
      icon: 'pi pi-users',
      routerLink: '/clientes',
    },
    {
      label: 'Ordem de Serviço',
      icon: 'pi pi-briefcase',
      routerLink: '/ordem-servico',
    },
    {
      label: 'Estoque',
      icon: 'pi pi-box',
      routerLink: '/Estoque',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
