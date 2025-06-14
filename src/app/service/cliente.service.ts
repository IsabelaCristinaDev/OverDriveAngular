import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "../model/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080/clientes'

  constructor(private http: HttpClient) {
  }

  buscarTodos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl)
  }

  criarCliente(cliente:Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl,cliente)
  }

}
