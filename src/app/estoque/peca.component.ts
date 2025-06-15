import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ImageModule} from "primeng/image";
import {PecaService} from "../service/peca.service";
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-peca',
  standalone: true,
  imports: [
    ReactiveFormsModule, InputTextModule, ButtonModule, ImageModule, TableModule,
  ],
  templateUrl: './peca.component.html',
  styleUrls: ['./peca.component.scss']
})
export class PecaComponent {
  formProduto: FormGroup = new FormGroup({
    name: new FormControl(''),
    preco: new FormControl(''),
    quantidade: new FormControl(''),
  });


  constructor(private pecaService: PecaService) {
  }

  salvarProduto() {
    if (this.formProduto.valid) {
      console.log('Produto salvo:', this.formProduto.value);

      this.formProduto.reset();
    } else {
      console.warn('Formulário inválido');
    }

  }
}
