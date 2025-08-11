import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { FormLancamentoComponent } from '../form-lancamento/form-lancamento.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adiciona-lancamento',
  templateUrl: './adiciona-lancamento.component.html',
  styleUrls: ['./adiciona-lancamento.component.css']
})
export class AdicionaLancamentoComponent {

  constructor(private dialog:MatDialog, private router:Router) {}

  @Input() titulo = '';

  abrirFormInclusao() {
    const dialogRef = this.dialog.open(FormLancamentoComponent, {
      width:'50rem',
      height: '14rem',
    })

    dialogRef.afterClosed().subscribe((response) => {
      if(response){
        this.router.navigate(['']);
      }

    })
  }
}
