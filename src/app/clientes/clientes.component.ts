import {Component, OnInit,} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import {InputMaskModule} from "primeng/inputmask";
import {CadastroCarroComponent} from "../cadastro-carro/cadastro-carro.component";
import {CadastroClienteComponent} from "../cadastro-cliente/cadastro-cliente.component";
import {ClienteService} from "../service/cliente.service";
import {Cliente} from "../model/cliente";
import { TableModule } from 'primeng/table';
import {Veiculo} from "../model/veiculo";
import {VeiculoService} from "../service/veiculo.service";
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { format } from 'date-fns';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [ReactiveFormsModule,
    InputTextModule,
    FormsModule,
    TabViewModule,
    ButtonModule,
    ImageModule,
    InputMaskModule,
    CommonModule,
    CadastroCarroComponent,CadastroClienteComponent,TableModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  cliente: Cliente[] = [];
  veiculo: Veiculo[] = [];
  activeIndex: number = 0;
  isRounded: boolean = true;

  constructor(
    private clienteService: ClienteService,
    private veiculoServiceService: VeiculoService
  ) {
  }

  ngOnInit(): void {
    this.buscarTodos()

  }

  buscarTodos() {
    this.clienteService.buscarTodos().subscribe({
      next: data => {

        this.cliente = data

      },
      error: () => {
        console.log("erro ao buscar")
      }
    });
  }

  buscarVeiculos() {
    this.veiculoServiceService.buscarTodos().subscribe({
      next: data => {
        this.veiculo = data;
      },
      error: () => {
        console.log("Erro ao buscar veículos.");
      }
    });
  }

  exportarClientesPDF() {
    const doc = new jsPDF();
    const dataHoje = format(new Date(), 'dd-MM-yyyy');

    autoTable(doc, {
      head: [['ID', 'Nome', 'Email', 'Celular', 'CPF', 'CNPJ']],
      body: this.cliente.map(c => [
        c.id ? c.id.toString() : '', c.nome || '', c.email || '', c.celular || '', c.cpf || '', c.cnpj || ''
      ]),
    });

    doc.save(`clientes-${dataHoje}.pdf`);
  }
}
