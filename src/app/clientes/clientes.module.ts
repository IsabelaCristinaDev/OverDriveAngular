import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ClientesRoutingModule } from './clientes-routing.module';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [BrowserModule,

    InputTextModule,
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
