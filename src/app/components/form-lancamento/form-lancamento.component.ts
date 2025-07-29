import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lancamento } from 'src/app/interfaces/Lancamento';

@Component({
  selector: 'app-form-lancamento',
  templateUrl: './form-lancamento.component.html',
  styleUrls: ['./form-lancamento.component.css']
})
export class FormLancamentoComponent implements OnInit{
  
  lancamento!:Lancamento;
  lancamentos: Lancamento[] = [];

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        descricao: ['', Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.maxLength(25)
        ])],
        tipoLancamento:[, Validators.compose([
          Validators.required,
        ])],
        valor: [, Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])]
      })
  }

  formulario!: FormGroup;

  evtClickAdicionar() {
    this.lancamento = this.formulario.value;
    this.lancamentos.push(this.lancamento);
    console.log(this.lancamento);
    console.log(this.lancamentos);
  }

}
