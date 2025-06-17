import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import {Cliente} from "../model/cliente";
import {ClienteService} from "../service/cliente.service";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    ImageModule,
    NgIf
  ],
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {
  formCliente: FormGroup = new FormGroup({
    nome: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    celular: new FormControl(''),
    cpf: new FormControl(''),
    cnpj: new FormControl('')
  });
  mensagemErro: string = '';

  ngOnInit(): void {

  }

  constructor(
    private clienteService: ClienteService,
  ) {

  }

  criarCliente() {
    if (this.formCliente.invalid) return;

    const novoCliente: Cliente = this.formCliente.value;

    this.clienteService.criarCliente(novoCliente).subscribe({
      next: clienteCriado => {
        this.clienteService.buscarTodos();
        console.log("Cliente criado:", clienteCriado);
        this.formCliente.reset();

      },

      error: (erro) => {
        console.log("Erro ao criar cliente: ");
        this.mensagemErro = 'Erro:ao criar cliente.';
      }
    });

  }
}
