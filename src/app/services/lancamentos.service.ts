import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lancamento } from 'src/app/interfaces/Lancamento';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  constructor(private httpClient:HttpClient) { }

  private readonly apiUrl = 'http://localhost:3000/lancamentos'

  addLancamento (lancamento:Lancamento):Observable<Lancamento> {
    return this.httpClient.post<Lancamento>(this.apiUrl, lancamento)
  }

  listLancamentos():Observable<Lancamento[]> {
    return this.httpClient.get<Lancamento[]>(this.apiUrl)
  }

  deleteLancamento(id:number):Observable<Lancamento> {
    const url = `${this.apiUrl}/${id}`
    return this.httpClient.delete<Lancamento>(url)
  }

  atualizaLancamento(id:number, lancamento:Lancamento) {
    const url = `${this.apiUrl}/${id}`
    console.log(lancamento.id)
    return this.httpClient.put(url, lancamento)
  }

  mathLancamento() {}
}
