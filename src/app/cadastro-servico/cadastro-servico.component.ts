import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { Servico } from '../model/servico';
import { ServicoService } from '../service/servico.service';
import {CommonModule} from "@angular/common";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {ImageModule} from "primeng/image";

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html',
  styleUrls: ['./cadastro-servico.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    ReactiveFormsModule,ImageModule
  ]
})
export class CadastroServicoComponent implements OnInit {

  formServico: FormGroup;
  servicos: Servico[] = [];
  editando: boolean = false;
  idEditando: number | null = null;

  constructor(private servicoService: ServicoService) {
    this.formServico = new FormGroup({
      nome: new FormControl('', Validators.required),
      precoUnitario: new FormControl(null, [Validators.required, Validators.min(0)]),
      quemFez: new FormControl('', Validators.required),

    });
  }

  ngOnInit(): void {
    this.carregarServicos();
  }

  carregarServicos(): void {
    this.servicoService.listar().subscribe(data => {
      this.servicos = data;
    });
  }

  salvar(): void {
    if (this.formServico.invalid) return;

    const servico: Servico = this.formServico.value;

    if (this.editando && this.idEditando) {
      this.servicoService.atualizar(this.idEditando, servico).subscribe(() => {
        this.resetarFormulario();
        this.carregarServicos();
      });
    } else {
      this.servicoService.salvar(servico).subscribe(() => {
        this.resetarFormulario();
        this.carregarServicos();
      });
    }
  }

  editarServico(servico: Servico): void {
    this.formServico.patchValue(servico);
    this.idEditando = servico.id!;
    this.editando = true;
  }

  excluirServico(id: number): void {
    if (confirm('Deseja realmente excluir este serviço?')) {
      this.servicoService.deletar(id).subscribe(() => {
        this.carregarServicos();
      });
    }
  }

  resetarFormulario(): void {
    this.formServico.reset();
    this.editando = false;
    this.idEditando = null;
  }
}
