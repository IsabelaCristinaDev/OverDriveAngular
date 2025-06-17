import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { Cliente } from "../model/cliente";
import { ClienteService } from "../service/cliente.service";
import { PecaService } from "../service/peca.service";
import { Peca } from "../model/peca";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import {MultiSelectModule} from "primeng/multiselect";
import {CalendarModule} from "primeng/calendar";
import {Veiculo} from "../model/veiculo";
import {VeiculoService} from "../service/veiculo.service";
import {ServicoService} from "../service/servico.service";
import {Servico} from "../model/servico";

@Component({
  selector: 'app-OrdemServicoComponent',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    DividerModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CommonModule,
    FormsModule,
    MultiSelectModule,
    CalendarModule
  ],
  templateUrl: './ordemServico.component.html',
  styleUrl: './ordemServico.component.scss',
})
export class OrdemServicoComponent implements OnInit {
  ordemForm!: FormGroup;
  clientes: Cliente[] = [];
  pecas: Peca[] = [];
  veiculos: Veiculo[] = [];
  ordemServico = { veiculo: null };
  servicos: Servico[] = [];

  pecasSelecionadas: any[] = [];
  servicosSelecionados: any[] = [];

  exibirDialogoPeca: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private pecaService: PecaService,
    private veiculoService: VeiculoService,
    private servicoService: ServicoService
  ) {}

  ngOnInit(): void {
    this.ordemForm = new FormGroup({
      cliente: new FormControl(''),
      veiculo: new FormControl(''),
      pecas: new FormControl(''),
      dataFaturamento: new FormControl(null),
      parcelas: new FormControl(null),
      quantidade: new FormControl(1),
      valorUnitario: new FormControl(0),
      percentualDesconto: new FormControl(0),
      valorTotalItem: new FormControl({ value: 0, disabled: true }),
      descricao: new FormControl(''),
    });

    this.clienteService.buscarTodos().subscribe((data) => {
      this.clientes = data;
    });

    this.pecaService.buscarTodas().subscribe((data) => {
      this.pecas = data;
    });
    this.veiculoService.buscarTodos().subscribe((data) => {
      this.veiculos = data;
    });
    this.servicoService.listar().subscribe(data => {
      this.servicos = data;
    });
  }

  abrirDialogoServico() {
    console.log("Abrir diálogo de serviço");
  }
  selecionarPeca(peca: Peca) {
    const copia = { ...peca, quantidade: 1 };
    this.pecasSelecionadas.push(copia);
    this.exibirDialogoPeca = false;
  }

  removerPeca(peca: any) {
    this.pecasSelecionadas = this.pecasSelecionadas.filter(p => p !== peca);
  }

  removerServico(servico: any) {
    this.servicosSelecionados = this.servicosSelecionados.filter(s => s !== servico);
  }

  calcularTotalPecas(): number {
    return this.pecasSelecionadas.reduce((total, p) => total + (p.preco * p.quantidade), 0);
  }

  calcularTotalServicos(): number {
    return this.servicosSelecionados.reduce((total, s) => total + s.valor, 0);
  }

  calcularValorTotal(): number {
    return this.calcularTotalPecas() + this.calcularTotalServicos();
  }

  salvarOrdem() {
    console.log("Ordem de serviço salva com sucesso.");
  }
}
