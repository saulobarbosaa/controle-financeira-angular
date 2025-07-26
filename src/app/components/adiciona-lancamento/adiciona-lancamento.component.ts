import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { FormLancamentoComponent } from '../form-lancamento/form-lancamento.component';

@Component({
  selector: 'app-adiciona-lancamento',
  templateUrl: './adiciona-lancamento.component.html',
  styleUrls: ['./adiciona-lancamento.component.css']
})
export class AdicionaLancamentoComponent {

  constructor(private dialog:MatDialog) {}

  abrirFormInclusao() {
    this.dialog.open(FormLancamentoComponent, {
      width:'50rem',
      height: '14rem',
    })
  }
}
