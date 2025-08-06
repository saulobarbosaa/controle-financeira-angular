import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Lancamento } from 'src/app/interfaces/Lancamento';
import { TipoLancamentoPipePipe } from 'src/app/pipes/tipo-lancamento-pipe.pipe';

@Component({
  selector: 'app-form-lancamento',
  templateUrl: './form-lancamento.component.html',
  styleUrls: ['./form-lancamento.component.css']
})
export class FormLancamentoComponent implements OnInit{
  
  formulario!: FormGroup;
  lancamento!:Lancamento;
  lancamentos: Lancamento[] = [];
  @Output() lancamentosOutput = new EventEmitter<Lancamento[]>();
  valorBotao:string = "Adicionar"
  valorTitulo:string = "Inserção de lançamento"
  

  constructor(private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {lancamento: Lancamento, titulo: string, textoBotao: string},
    private dialogRef: MatDialogRef<FormLancamentoComponent>
  ) {}

  ngOnInit(): void {
    if(this.data == null) {
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
    } else if(this.data != null) {
      this.formulario = this.formBuilder.group({
        descricao: [this.data.lancamento.descricao, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.maxLength(25)
        ])],
        tipoLancamento:[this.data.lancamento.tipoLancamento, Validators.compose([
          Validators.required,
        ])],
        valor: [this.data.lancamento.valor, Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])]
      })

      this.valorBotao = this.data.textoBotao
      this.valorTitulo = this.data.titulo
    }
  }

  evtClickAdicionar() {
    this.lancamento = this.formulario.value;
    this.lancamentos.push(this.lancamento);
    console.log(this.lancamento);
    console.log(this.lancamentos);

    this.lancamentosOutput.emit(this.lancamentos)
  }

}
