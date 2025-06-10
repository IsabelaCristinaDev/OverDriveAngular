import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule,FormsModule,TabViewModule,ButtonModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {

  activeIndex: number = 0;
  isRounded: boolean =true;
}

