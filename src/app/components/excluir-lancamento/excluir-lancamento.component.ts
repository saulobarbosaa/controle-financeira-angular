import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LancamentosService } from 'src/app/services/lancamentos.service';

@Component({
  selector: 'app-excluir-lancamento',
  templateUrl: './excluir-lancamento.component.html',
  styleUrls: ['./excluir-lancamento.component.css']
})
export class ExcluirLancamentoComponent {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: number},
    private service:LancamentosService,
    private routing:Router,
    private dialogRef: MatDialogRef<ExcluirLancamentoComponent>
  ) {}

  evtClickExcluir() {
    this.dialogRef.close(true)
  }
}
