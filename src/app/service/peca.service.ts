
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Peca } from '../model/peca';
import {Veiculo} from "../model/veiculo";

@Injectable({
  providedIn: 'root'
})
export class PecaService {

  private apiUrl = 'http://localhost:8080/peca';

  constructor(private http: HttpClient) {}

  listarPecas(): Observable<Peca[]> {
    return this.http.get<Peca[]>(`${this.apiUrl}/`);
  }

  buscarPorId(id: number): Observable<Peca> {
    return this.http.get<Peca>(`${this.apiUrl}/${id}`);
  }

  criarPeca(peca: Peca): Observable<Peca> {
    return this.http.post<Peca>(`${this.apiUrl}/`, peca);
  }

  atualizarPeca(id: number, peca: Peca): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, peca);
  }

  deletarPeca(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  buscarTodas(): Observable<Peca[]> {
    return this.http.get<Peca[]>(this.apiUrl);
  }
}
