import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Lancamento } from 'src/app/interfaces/Lancamento';
import { TipoLancamentoPipePipe } from 'src/app/pipes/tipo-lancamento-pipe.pipe';
import { LancamentosService } from 'src/app/services/lancamentos.service';

@Component({
  selector: 'app-form-lancamento',
  templateUrl: './form-lancamento.component.html',
  styleUrls: ['./form-lancamento.component.css']
})
export class FormLancamentoComponent implements OnInit{
  
  formulario!: FormGroup;
  lancamentos: Lancamento[] = [];
  @Output() lancamentosOutput = new EventEmitter<Lancamento[]>();
  valorBotao:string = "Adicionar"
  valorTitulo:string = "Inserção de lançamento"
  

  constructor(private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {lancamento: Lancamento, titulo: string, textoBotao: string},
    private dialogRef: MatDialogRef<FormLancamentoComponent>,
    private lancamentoService: LancamentosService
  ) {}

  ngOnInit(): void {
    //caso seja inserção
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
    } //caso seja edição 
    else if(this.data != null) {
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
    const lancamento:Lancamento = this.formulario.value;

    if(this.data == null) {
        this.lancamentoService.addLancamento(lancamento).subscribe((response) => {
        console.log(response)
      })
      this.dialogRef.close(true)
    }
    else if (this.data != null) {
      this.lancamentoService.atualizaLancamento(this.data.lancamento.id, lancamento).subscribe((response) => {
        console.log("lancamento atualizado")
      })
      this.dialogRef.close(true)
    }
    
  }

}
