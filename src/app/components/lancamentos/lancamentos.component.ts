import { Component, OnInit } from '@angular/core';
import { FormLancamentoComponent } from '../form-lancamento/form-lancamento.component';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit{

  constructor(private dialog:MatDialog) {}

ngOnInit(): void {
}
  
  titulo:string = "Controle Financeiro"

  abrirFormInclusao() {
    this.dialog.open(FormLancamentoComponent, {
      width:'50rem',
      height: '14rem',
    })
  }
}
