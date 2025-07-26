import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Lancamento } from 'src/app/interfaces/Lancamento';

@Component({
  selector: 'app-form-lancamento',
  templateUrl: './form-lancamento.component.html',
  styleUrls: ['./form-lancamento.component.css']
})
export class FormLancamentoComponent implements OnInit{
  
  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        descricao: ['Aluguel'],
        tipoLancamento:['two'],
        valor: [0.01]
      })
  }

  formulario!: FormGroup;

  evtClickAdicionar() {

  }

}
