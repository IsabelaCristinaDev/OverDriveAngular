import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { Veiculo} from "../model/veiculo";
import { CommonModule } from '@angular/common';
import {jsPDF }from 'jspdf';
import {autoTable }from 'jspdf-autotable';
import { TableModule } from 'primeng/table';
import {VeiculoService} from "../service/veiculo.service";


@Component({
  selector: 'app-cadastro-carro',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ImageModule,
    ButtonModule,
    CommonModule,
    TableModule
  ],
  templateUrl: './cadastro-carro.component.html',
  styleUrls: ['./cadastro-carro.component.scss']
})
export class CadastroCarroComponent implements OnInit {

  formCarro: FormGroup = new FormGroup({
    marca: new FormControl(''),
    modelo: new FormControl(''),
    placa: new FormControl('')
  });

  veiculos: Veiculo[] = [];
  editandoId?: number;
  mensagemErro: string = '';

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit() {
    console.log('CadastroCarroComponent iniciado');
    this.carregarVeiculos();
  }

  carregarVeiculos() {
    this.veiculoService.buscarTodos().subscribe({
      next: (dados: Veiculo[]) => {
        console.log('Veículos recebidos:', dados);
        this.veiculos = dados;
        this.mensagemErro = '';
      },
      error: (err) => {
        console.error('Erro ao buscar veículos:', err);
        this.mensagemErro = 'Erro ao carregar veículos.';
      }
    });
  }

  salvar() {
    if (this.formCarro.invalid) {
      this.mensagemErro = 'Preencha todos os campos corretamente.';
      return;
    }

    const veiculo: Veiculo = this.formCarro.value;

    if (this.editandoId !== undefined) {
      this.veiculoService.atualizarVeiculo(this.editandoId, veiculo).subscribe({
        next: () => {
          this.limparFormulario();
          this.carregarVeiculos();
        },
        error: () => this.mensagemErro = 'Erro ao atualizar veículo.'
      });
    } else {
      this.veiculoService.criarVeiculo(veiculo).subscribe({
        next: () => {
          this.limparFormulario();
          this.carregarVeiculos();
        },
        error: () => this.mensagemErro = 'Erro ao criar veículo.'
      });
    }
  }

  editar(veiculo: Veiculo) {
    this.editandoId = veiculo.id;
    this.formCarro.patchValue({
      marca: veiculo.marca,
      modelo: veiculo.modelo,
      placa: veiculo.placa
    });
    this.mensagemErro = '';
  }

  deletar(id?: number) {
    if (!id) return;

    if (confirm('Deseja realmente deletar este veículo?')) {
      this.veiculoService.deletarVeiculo(id).subscribe({
        next: () => this.carregarVeiculos(),
        error: () => this.mensagemErro = 'Erro ao deletar veículo.'
      });
    }
  }

  limparFormulario() {
    this.formCarro.reset();
    this.editandoId = undefined;
    this.mensagemErro = '';
  }
  exportarPDF() {
    const doc = new jsPDF();

    autoTable(doc, {
      head: [['ID', 'Marca', 'Modelo', 'Placa']],
      body: this.veiculos.map(v => [v.id?.toString() || '', v.marca, v.modelo, v.placa])
    });

    doc.save('veiculos.pdf');
  }

}
