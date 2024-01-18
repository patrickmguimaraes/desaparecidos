import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Desaparecido } from '../models/desaparecido';
import { environment } from '../../environments/environment';

const baseUrl = environment.apiDesaparecidos + '/pessoas';

export interface DesaparecidoResult {
  content: Desaparecido[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Object;
  size: number;
  sort: Object;
  totalElements: number;
  totalPages: number;
}

@Injectable({
  providedIn: 'root'
})
export class DesaparecidosService {

  constructor(private http: HttpClient) {}

  filtro(pagina: number = 0, nome: string = "", sexo: string = "", faixaIdadeInicial: number = 0, faixaIdadeFinal: number = 0, status: string = "DESAPARECIDO"): Observable<DesaparecidoResult> {
    return this.http.get<DesaparecidoResult>(baseUrl + `/aberto/filtro?faixaIdadeFinal=${faixaIdadeFinal}&faixaIdadeInicial=${faixaIdadeInicial}&nome=${nome}&porPagina=12&sexo=${sexo}&status=${status}&pagina=${pagina}`);
  }

  getDesaparecido(id: number): Observable<Desaparecido> {
    return this.http.get<Desaparecido>(baseUrl + `/${id}`);
  }
}
