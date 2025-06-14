import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-OrdemServicoComponent',
  standalone: true,
  imports: [
    ReactiveFormsModule,InputTextModule
  ],
  templateUrl: './ordemServico.component.html',
  styleUrl: './ordemServico.component.scss',
})
export class OrdemServicoComponent {

  ordemForm: FormGroup = new FormGroup({
   cliente :new FormControl(''),
   dataFaturamento :new FormControl(null),
   parcelas :new FormControl(null),
   quantidade:new FormControl(1),
   valorUnitario:new FormControl(0),
   percentualDesconto:new FormControl(0),
   valorTotalItem:new FormControl({ value: 0, disabled: true }),
   descricao:new FormControl(''),
});

}
