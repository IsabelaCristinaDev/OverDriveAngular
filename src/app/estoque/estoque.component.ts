import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ImageModule} from "primeng/image";

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [
    ReactiveFormsModule, InputTextModule, ButtonModule, ImageModule
  ],
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent {
  formProduto: FormGroup = new FormGroup({
    name: new FormControl(''),
    preco: new FormControl(''),
    quantidade: new FormControl(''),
  });


  salvarProduto() {
    if (this.formProduto.valid) {
      console.log('Produto salvo:', this.formProduto.value);

      this.formProduto.reset();
    } else {
      console.warn('Formulário inválido');
    }

  }
}
