import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Servico} from "../model/servico";

@Injectable({
  providedIn:'root'
})
export class ServicoService {
  private apiUrl = 'http://localhost:8080/api/servicos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Servico> {
    return this.http.get<Servico>(`${this.apiUrl}/${id}`);
  }

  salvar(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.apiUrl, servico);
  }

  atualizar(id: number, servico: Servico): Observable<Servico> {
    return this.http.put<Servico>(`${this.apiUrl}/${id}`, servico);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
