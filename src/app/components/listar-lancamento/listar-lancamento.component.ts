import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Lancamento } from 'src/app/interfaces/Lancamento';
import { LancamentosService } from 'src/app/services/lancamentos.service'
import { ExcluirLancamentoComponent } from '../excluir-lancamento/excluir-lancamento.component';
import { Router } from '@angular/router';
import { FormLancamentoComponent } from '../form-lancamento/form-lancamento.component';

@Component({
  selector: 'app-listar-lancamento',
  templateUrl: './listar-lancamento.component.html',
  styleUrls: ['./listar-lancamento.component.css']
})
export class ListarLancamentoComponent implements OnInit {

  constructor(
    private lancamentoServico:LancamentosService,
    private dialog:MatDialog,
    private router:Router
  ) {}

  listaLancamentos:Lancamento[] = [];
  dataSource = this.listaLancamentos;
  displayedColumns:string[] = ['id', 'descricao', 'tipoLancamento', 'valor', 'acao']

  ngOnInit(): void {
      this.carregarLista();
  }

  evtExcluir(id:number) {
    const dialogRef = this.dialog.open(ExcluirLancamentoComponent, {
      height: '120px',
      data: {id: id}
    })

    dialogRef.afterClosed().subscribe((confirmado) => {
      if(confirmado) {
        this.lancamentoServico.deleteLancamento(id).subscribe(
          () => { 
            this.carregarLista()
          }
        )
      }
    })

  }

  evtEditar(lancamento:Lancamento) {
    this.dialog.open(FormLancamentoComponent, {
      width:'50rem',
      height: '14rem',
      data: {
        lancamento: lancamento,
        titulo: "Atualização de lançamento",
        textoBotao: "Atualizar"
      }
    })
  }

  carregarLista() {
    this.lancamentoServico.listLancamentos().subscribe((listaAPI) => {
        this.listaLancamentos = listaAPI
        this.dataSource = listaAPI
      })
  }

}
